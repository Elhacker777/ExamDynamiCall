import { Component, OnInit } from '@angular/core';
/* import { Store } from "@ngrx/store";
import { Nave } from './models/naves.model';
import * as fromStore  from './store'; */


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'massimo-dutti';

 /*  naves : Nave[];

  constructor(private store : Store< fromStore.AppState>){
    
   
    store.select(fromStore.getNaves).subscribe(rs => {
      this.naves = rs;
      console.log('SHIPS -->', this.naves)
    });

    store.select(fromStore.getNaveById("CR90 corvette")).subscribe(rs => {
      
      console.log('Found -->', rs)
    });



  }

  ngOnInit(){
    this.store.dispatch(new fromStore.LoadNave());
  } */
}
