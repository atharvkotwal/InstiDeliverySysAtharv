import { Injectable } from '@angular/core';
import { Eatery } from './eatery';
import { FoodDetails,FoodType } from './fooddetails';
import { Orderlist } from './orderlist';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders:Orderlist[]= [];
  test:number;
  constructor() { }

  order(etry:Eatery):void{
      var fdetails:FoodType[][] = etry.details;
      for(var k=0;k<fdetails.length;k++){
        for(var l=0; l<fdetails[k].length;l++){
          for(var i=0;i<fdetails[k][l].Ftypedet.length ;i++){
            var food= fdetails[k][l].Ftypedet[i];
            if(food.qty>0){
              var order:Orderlist = {Eid:etry.Eid, 
                                  name:etry.name, 
                                  Fid:food.Fid, 
                                  foodname:food.foodname, 
                                  qty:food.qty,
                                  price:food.price,
                                  totprice:food.qty*food.price
                                };
              this.orders.push(order);
            }
          }
        }        
      }
      this.refine(this.orders);
  }
  refine(list:Orderlist[]):void{
    for(var i=0; i<list.length; i++){
      for(var j=i+1; j<list.length; j++){
        if((list[i].Eid==list[j].Eid) && (list[i].Fid==list[j].Fid)){
          list[i].qty=list[j].qty;
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
