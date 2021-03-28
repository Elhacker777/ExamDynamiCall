import { Nave } from 'src/models/naves.model';
import * as fromNaveActions from '../actions/naves.action';

export interface NaveState {
    data: Nave[];
    loaded : boolean;
    loading: boolean;
    error: string;
}

export const initialState : NaveState = {
    data : [],
    loaded  : false,
    loading : false, 
    error: ''   
    
}

export function reducer(state = initialState, action){
    switch(action.type){
        case fromNaveActions.LOAD_NAVES: {
            return {
                ...state,
                loading: true
            }
        }

        default: {
            return state;
        }

    }
}