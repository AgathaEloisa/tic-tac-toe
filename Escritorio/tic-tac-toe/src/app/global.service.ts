import { Injectable } from '@angular/core';
import { cellType } from './cell-model';
import { CELL } from './cell-data';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  title = 'Gatoto';

  CELL: cellType = CELL;
  constructor() { }
}
