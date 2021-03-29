import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Nave } from 'src/app/models/naves.model';
//import { ShipsService } from 'src/app/services/ships.service';
import * as fromStore  from '../../store';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.scss']
})
export class ShipsComponent implements OnInit {

  public dataList: Nave[]; 
  //naves : Nave[];

  constructor( 
    private store : Store< fromStore.AppState>
    //private shipsService: ShipsService
    ) {
      store.select(fromStore.getNaves).subscribe(rs => {
        this.dataList = rs;
        console.log('SHIPS -->', this.dataList)
      });
  
      store.select(fromStore.getNaveById("CR90 corvette")).subscribe(rs => {
        
        console.log('Found -->', rs)
      });


    }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadNave());

   /*  this.shipsService.getShips().subscribe((ships) => {
      this.dataList = ships;     
      //console.log('SHIPS -->', this.data.results)
    }) */
  }
}
