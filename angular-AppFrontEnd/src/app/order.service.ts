import { Injectable } from '@angular/core';
import { Eatery } from './eatery';
import { FoodDetails } from './fooddetails';
import { Orderlist } from './orderlist';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders:Orderlist[]= [];
  test:number;
  constructor() { }

  order(etry:Eatery):void{
      var fdetails:FoodDetails[] = etry.details;
      for(var i=0;i<fdetails.length;i++){
        //var food= fdetails[i];
        if(fdetails[i].qty>0){
          var food:Orderlist = {Eid:etry.Eid, 
                              name:etry.name, 
                              Fid:fdetails[i].Fid, 
                              foodname:fdetails[i].foodname, 
                              qty:fdetails[i].qty,
                              price:fdetails[i].price,
                              totprice:fdetails[i].qty*fdetails[i].price
                            };
          this.orders.push(food);
        }
      }
      this.refine(this.orders);
  }
  refine(list:Orderlist[]):void{
    for(var i=0; i<list.length; i++){
      for(var j=i+1; j<list.length; j++){
        if(list[i].Fid==list[j].Fid){
          list[i].qty+=list[j].qty;
          list[i].totprice=list[i].qty*list[i].price;
          list.splice(j,1);
        }
      }
    }
  }
  clear():void{
    this.orders=[];
  }
}
