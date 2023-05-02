import { Injectable } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {
cararr:Car[]=[]
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.cararr.push({id:i,carnumber:"",time:"",occupied:false})
    }
    console.log(this.cararr)
   }

}
