import { Component } from '@angular/core';
import { TableDataService } from '../table-data.service';
import { Car } from '../car';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent {
  total:number
cdata:Car[]
update:Car={} as Car
constructor(private tdata:TableDataService){
this.cdata=this.tdata.cararr
this.total=this.cdata.length
}
find(id:number){
  this.update=this.cdata.find(obj=>obj.id==id) as Car
  console.log(this.update);
}
change(){
  this.update.occupied=true
  this.total=this.cdata.length-this.cdata.filter(obj=>obj.occupied==true).length
}
}
