import { Action } from '@ngrx/store';
import { Type } from '@angular/core';

export const enum AppActionTypes {
    OPEN_MODAL = '[App] Open modal',
    CLOSE_MODAL = '[App] Close modal'
}

export class OpenModal implements Action {
    readonly type = AppActionTypes.OPEN_MODAL;

    constructor( public payload: { content: Type<any> }) {}
}

export class CloseModal implements Action {
    readonly type = AppActionTypes.CLOSE_MODAL;
}

export type AppActionsUnion = OpenModal | CloseModal;
