import { Action} from "@ngrx/store";
import { Nave } from "src/app/models/naves.model";

export const LOAD_NAVES  = '[Nave] Load naves';
export const LOAD_NAVES_SUCCESS = '[Nave] Load naves success';
export const LOAD_NAVES_FAIL = '[Nave] Load naves fail';



export class LoadNave implements Action{
    readonly type = LOAD_NAVES;
}
export class LoadNaveSuccess implements Action{
    readonly type = LOAD_NAVES_SUCCESS;

    constructor(public payload: Nave[]){}
}

export class LoadNaveFail implements Action{
    readonly type = LOAD_NAVES_FAIL;

    constructor(public payload: any){}
}

export type NaveActions = 
LoadNave        |
LoadNaveSuccess |
LoadNaveFail;