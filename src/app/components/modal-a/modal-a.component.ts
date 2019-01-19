import { Component, OnInit } from '@angular/core';
import { State } from '../../store/reducers/app.reducer';
import { Store } from '@ngrx/store';
import * as modalActions from '../../store/actions/app.actions';

@Component({
  selector: 'app-modal-a',
  templateUrl: './modal-a.component.html',
  styleUrls: ['./modal-a.component.scss']
})
export class ModalAComponent implements OnInit {
  constructor(private store: Store<State>) {}

  ngOnInit() {}

  close() {
    this.store.dispatch(new modalActions.CloseModal());
  }
}
