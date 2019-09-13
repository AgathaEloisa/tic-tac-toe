import { Component, Input } from '@angular/core';
import { GlobalService } from '../global.service';
// import { Title } from '@angular/platform-browser';
import { cellType } from '../cell-model';
import { CELL } from '../cell-data';
import { Cell } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
title: string;

@Input() public piece: cellType = CELL.emptyCell;
@Input() public row: number; 
@Input() public col: number;

// emptyCell: any;
turn: any;

  constructor(private globalService: GlobalService) {
   this.title = this.globalService.title;
  //  this.emptyCell = this.globalService.CELL.emptyCell;
   this.turn = this.globalService.CELL.o;
  }

  

}
