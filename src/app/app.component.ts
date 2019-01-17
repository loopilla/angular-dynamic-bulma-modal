import { Component, Type } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './store/reducers/app.reducer';

import * as AppActions from './store/actions/app.actions';
import { ModalAComponent } from './components/modal-a/modal-a.component';
import { ModalBComponent } from './components/modal-b/modal-b.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-bulma-modal';

  constructor(private store: Store<State>) { }

  openModal(type: string) {
      let modalType: Type<any> = null;

      switch (type) {
        case 'a': {
            modalType = ModalAComponent;
            break;
        }
        case 'b': {
            modalType = ModalBComponent;
            break;
        }
      }
    this.store.dispatch( new AppActions.OpenModal({
        content: modalType
    }));
  }
}
