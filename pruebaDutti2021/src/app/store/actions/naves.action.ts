import { Action} from "@ngrx/store";

export const LOAD_NAVES  = '[Naves] Load naves';

export class LoadNave implements Action{
    readonly type = LOAD_NAVES;

}

export type NaveActions = LoadNave;