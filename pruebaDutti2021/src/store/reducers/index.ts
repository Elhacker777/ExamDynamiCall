import * as fromNaveReducer from './app.reducer';

export interface AppState {
    naves: fromNaveReducer.NaveState

}

export const reducers = {
    naves : fromNaveReducer.reducer
}