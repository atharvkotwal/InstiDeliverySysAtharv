import { Injectable } from '@angular/core';
import { Eatery } from './eatery';
import { FoodDetails,FoodType } from './fooddetails';
import { Orderlist,finalorder,finalorderlist } from './orderlist';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders:Orderlist[]= [];
  constructor() { }

  order(etry:Eatery):any{
      var fdetails:FoodType[] = etry.Menu;
        for(var l=0; l<fdetails.length;l++){
          for(var i=0;i<fdetails[l].Ftypedet.length ;i++){
            var food= fdetails[l].Ftypedet[i];
            if((food.qty>0) && (Number.isInteger(food.qty))){
              var order:Orderlist = {Eid:etry.Eid, 
                                  name:etry.name, 
                                  Fid:food.id, 
                                  foodname:food.foodname, 
                                  qty:food.qty,
                                  price:food.price,
                                  totprice:food.qty*food.price
                                };
              this.orders.push(order);
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
  finalorder(){
    var token = localStorage.getItem('token');
    var finallist : finalorder[] = [];
    for(var i=0; i<this.orders.length;i++){
      var item:finalorder = {
        Fid:this.orders[i].Fid,
        quantity:this.orders[i].qty
      }
      finallist.push(item);
    }
    const body:finalorderlist = {"auth_token":token, "order":finallist}
    //POST request
  }
}
