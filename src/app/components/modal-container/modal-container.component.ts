import { Component, OnInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';

import { State, getModalRef } from '../../store/reducers/app.reducer';
import { Store, select } from '@ngrx/store';

import { ModalDirective } from './modal.directive';

import * as AppActions from '../../store/actions/app.actions';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss']
})
export class ModalContainerComponent implements OnInit {
  @ViewChild(ModalDirective) ref: ModalDirective;
  visible = false;

  constructor(
      private store: Store<State>,
      private componentFactoryResolver: ComponentFactoryResolver
    ) { }

  ngOnInit() {
      // Subscribe to modal ref change
      this.store.pipe(
        select(getModalRef)
      ).subscribe(modal => {
        // when modal ref changed
        if (modal) {
            this.loadComponent(modal);
        }
      });
  }

  loadComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const viewContainerRef = this.ref.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.visible = true;
  }
}
