import { Injectable } from '@angular/core';
import { Eatery } from './eatery';
import { environment } from '../environments/environment';
import { FoodDetails, FoodType } from './fooddetails';
import { Orderlist, finalorder, finalorderlist } from './orderlist';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders: Orderlist[] = [];
  apibaseurl = environment.apibaseURL;
  constructor(private http: HttpClient) { }

  order(etry: Eatery): any {
    var fdetails: FoodType[] = etry.Menu;
    for (var l = 0; l < fdetails.length; l++) {
      for (var i = 0; i < fdetails[l].Ftypedet.length; i++) {
        var food = fdetails[l].Ftypedet[i];
        if ((food.qty > 0) && (Number.isInteger(food.qty))) {
          var order: Orderlist = {
            name: etry.name,
            Fid: food.id,
            foodname: food.foodname,
            qty: food.qty,
            price: food.price,
            totprice: food.qty * food.price
          };
          this.orders.push(order);
        }
      }
    }
    this.refine(this.orders);
  }
  refine(list: Orderlist[]): void {
    for (var i = 0; i < list.length; i++) {
      for (var j = i + 1; j < list.length; j++) {
        if (list[i].Fid == list[j].Fid) {          //Now no Eid Checking here
          list[i].qty = list[j].qty;
          list[i].totprice = list[i].qty * list[i].price;
          list.splice(j, 1);
        }
      }
    }
  }
  add(fd) {
    if (fd.qty) {
      var order: Orderlist = {
        name: fd.etry,
        Fid: fd.id,
        foodname: fd.foodname,
        qty: fd.qty,
        price: fd.price,
        totprice: fd.qty * fd.price
      };
      this.orders.push(order);
      this.refine(this.orders);
    }
  }
  clear(): void {
    this.orders = [];
  }
  finalorder() {
    var token = localStorage.getItem('token');
    var finallist: finalorder[] = [];
    for (var i = 0; i < this.orders.length; i++) {
      var item: finalorder = {
        Fid: this.orders[i].Fid,
        quantity: this.orders[i].qty
      }
      finallist.push(item);
    }
    const body: finalorderlist = { "auth_token": token, "order": finallist }
    //POST request
    var url = this.apibaseurl + "order/add";
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'JWT ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(url, body, httpOptions)
  }
}
