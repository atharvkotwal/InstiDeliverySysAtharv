import { Component, OnInit } from '@angular/core';
import  {OrderService} from '../order.service';
import { Location } from '@angular/common';
import { Orderlist } from '../orderlist';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  total:number=0;
  dta:any;
  constructor(public orderservice:OrderService,
              private location: Location
            ) { }

  ngOnInit() {
    this.dototal();
  }
  dototal():void{
    for(var j=0; j<this.orderservice.orders.length; j++){
      this.total+=this.orderservice.orders[j].totprice;
    }
  }
  goBack(): void {
    this.location.back();
  }
  clear():void{
    this.orderservice.clear();
  }
  finalorder(){
    this.orderservice.finalorder().subscribe(data=>this.dta=data);
  }

}
