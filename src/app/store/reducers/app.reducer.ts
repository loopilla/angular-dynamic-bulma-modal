import * as AppActions from '../actions/app.actions';
import { ComponentRef } from '@angular/core';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    showModal: boolean;
    componentRef: any;
}

const initialState: State = {
    showModal: false,
    componentRef: null
};

const getModalState = createFeatureSelector<State>('modal');

export const getModalShow = createSelector(
    getModalState,
    state => state.showModal
);

export const getModalRef = createSelector(
    getModalState,
    state => state.componentRef
);

export function reducer(
    state: State = initialState,
    action: AppActions.AppActionsUnion
): State {
    switch (action.type) {
        case AppActions.AppActionTypes.OPEN_MODAL: {
            return {
                showModal: true,
                componentRef: action.payload.content
            };
        }

        case AppActions.AppActionTypes.CLOSE_MODAL: {
            return {
                showModal: false,
                componentRef: null
            };
        }

        default:
            return state;
    }
}

export const getShowModal = (state: State) => state.showModal;
