import * as AppActions from '../actions/app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Type } from '@angular/core';

export interface State {
    showModal: boolean;
    componentType: Type<any>;
}

const initialState: State = {
    showModal: false,
    componentType: null
};

const getModalState = createFeatureSelector<State>('modal');

export const getModalShow = createSelector(
    getModalState,
    state => state.showModal
);

export const getComponentType = createSelector(
    getModalState,
    state => state.componentType
);

export function reducer(
    state: State = initialState,
    action: AppActions.AppActionsUnion
): State {
    switch (action.type) {
        case AppActions.AppActionTypes.OPEN_MODAL: {
            return {
                ...state,
                showModal: true,
                componentType: action.payload.content
            };
        }

        case AppActions.AppActionTypes.CLOSE_MODAL: {
            return {
                ...state,
                showModal: false
            };
        }

        default:
            return state;
    }
}
