import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type, ComponentRef, OnDestroy } from '@angular/core';

import { State, getComponentType, getModalShow } from '../../store/reducers/app.reducer';
import { Store, select } from '@ngrx/store';

import { ModalDirective } from './modal.directive';

import * as AppActions from '../../store/actions/app.actions';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit, OnDestroy {
  @ViewChild(ModalDirective) ref: ModalDirective;
  visible = false;
  componentRef: ComponentRef<any>;

  constructor(
      private store: Store<State>,
      private componentFactoryResolver: ComponentFactoryResolver
    ) { }

  ngOnInit() {
      // Subscribe to modal ref change
      this.store.pipe(
        select(getComponentType)
      ).subscribe(modal => {
        // when opening a new modal, we create a new componentRef by its type
        if (modal) {
            this.componentRef = this.createComponent(modal);
        }
      });

      // Everytime closeing a modal, the content component will be destroyed
      this.store.pipe(
          select(getModalShow)
      ).subscribe( show => {
          // Set modal visibility by modal state
          // As the modal component object cannot be store in state,
          // we keep the reference in the modal container object (you are looking at it..)
          this.visible = show;
          if (!this.visible) {
              if (this.componentRef) {
                this.componentRef.destroy();
              }
          }
      });
  }

  createComponent(componentType: Type<any>): ComponentRef<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.ref.viewContainerRef;
    viewContainerRef.clear();
    return viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
  }
}
