import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ShipsService } from 'src/app/services/ships.service';
import * as fromNaveActions from '../actions/naves.action';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NaveEffects {
    constructor(
        private actions$: Actions,
        private shipsService : ShipsService 
    ) {}


    @Effect() 
    loadNaves$ : Observable<Action> = this.actions$.pipe(
        ofType(fromNaveActions.LOAD_NAVES), 
        switchMap(() => this.shipsService.getShips()
        .pipe(
            map(response => {
                //obtenemos solo el result de la data
                return new fromNaveActions.LoadNaveSuccess(response.results)
            },
            catchError(error => of(new fromNaveActions.LoadNaveFail(error)))            
            )
        )
        )
    )    


}