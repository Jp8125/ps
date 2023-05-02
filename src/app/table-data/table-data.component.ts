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
  occupied:number=0
  price!:number
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
  this.occupied=this.cdata.filter(obj=>obj.occupied==true).length
  this.total=this.cdata.length-this.occupied
 
}
out(idStat:number){
  let tt=(parseInt(this.update.outtime.split(":")[0])-parseInt(this.update.intime.split(":")[0]))+((parseInt(this.update.outtime.split(":")[1])-parseInt(this.update.intime.split(":")[1]))/60)
  if(tt<0)
  {
    console.log(tt);
    tt=tt+24
  }
  
  
  this.cdata[idStat]={id:idStat,carnumber:"",intime:"",outtime:"",occupied:false}
  this.occupied=this.cdata.filter(obj=>obj.occupied==true).length
  this.total=this.cdata.length-this.occupied
  if(Math.round(tt)==1)
  {
    this.price=20;
    console.log(this.price);
  }
  else if(Math.round(tt)>=2 && Math.round(tt)<=4)
  {
    this.price=40;
    console.log(this.price);
    
  }
  else if(Math.round(tt)>=4 && Math.round(tt)<=6){
    this.price=100;
    console.log(this.price);
  }
  else if(Math.round(tt)>=6 && Math.round(tt)<=8){
    this.price=200;
    console.log(this.price);
  }
}
}
