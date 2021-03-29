import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromNaveReducer from './app.reducer';

export interface AppState {
    naves: fromNaveReducer.NaveState

}

export const reducers = {
    naves : fromNaveReducer.reducer
}

export const getState = (state) => state;

export const getNavesState = createFeatureSelector<fromNaveReducer.NaveState>('naves');

export const getNaves = createSelector(getNavesState, fromNaveReducer.getNaves);

export const getNaveById = (name) => createSelector(getNaves,(naves) => {
    if (naves){
        var naveFound = naves.find(nave => {
            return nave.name == name
        });

        return naveFound || {};
    }
    else{
        return {};
    }

});