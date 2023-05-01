import { Component } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { Car } from '../car';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {
cdata:Car[]
constructor(private tdata:TableDataService){
this.cdata=this.tdata.cararr
}
}
