import { Nave } from 'src/app/models/naves.model';
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

export function reducer(state = initialState, action: fromNaveActions.NaveActions){
    switch(action.type){
        case fromNaveActions.LOAD_NAVES: {
            return {
                ...state,
                loading: true
            }
        }

        case fromNaveActions.LOAD_NAVES_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                data
            }
        }

        case fromNaveActions.LOAD_NAVES_FAIL:{
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            }
        }

        default: {
            return state;
        }

    }
}

export const getNaves = (state: NaveState) => state.data;
export const getNavesLoaded = (state: NaveState) => state.loaded;
export const getNavesLoading = (state: NaveState) => state.loading;
export const getNavesError = (state: NaveState) => state.error;