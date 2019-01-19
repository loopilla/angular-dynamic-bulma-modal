import { Component, OnInit } from '@angular/core';
import { State } from '../../store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import * as modalActions from '../../store/actions/app.actions';

@Component({
  selector: 'app-modal-b',
  templateUrl: './modal-b.component.html',
  styleUrls: ['./modal-b.component.scss']
})
export class ModalBComponent implements OnInit {

  constructor(
      private store: Store<State>
  ) { }

  ngOnInit() {
  }

  close() {
    this.store.dispatch(
        new modalActions.CloseModal()
    );
  }
}
