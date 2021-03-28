import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromStore  from './store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'massimo-dutti';

  constructor(private store : Store< fromStore.AppState>){
    store.select('naves').subscribe(rs => {
      console.log(rs);
    });
  }
}
