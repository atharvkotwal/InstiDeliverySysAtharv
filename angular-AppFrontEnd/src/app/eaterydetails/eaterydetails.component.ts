import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Eatery } from '../eatery';
import { FoodDetails,FoodType } from '../fooddetails';
import { EaterydetService } from '../eaterydet.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eaterydetails',
  templateUrl: './eaterydetails.component.html',
  styleUrls: ['./eaterydetails.component.css']
})
export class EaterydetailsComponent implements OnInit {
  @Input() eatery:Eatery;
  fdetails:FoodType[][];

  constructor(
  		private route: ActivatedRoute,
      private location: Location,
      private eaterydetservice:EaterydetService,
      private orderservice:OrderService,
      private router:Router
  ) { }

  ngOnInit() {
    this.getetrydet();
  }
  getetrydet(): void {
    const id = +this.route.snapshot.paramMap.get('Eid');
    this.eaterydetservice.geteaterydet(id)
        .subscribe(etry => this.eatery = etry);
    this.fdetails= this.eatery.details;
  }
  placeorder():void{
    this.orderservice.order(this.eatery);
    this.router.navigate(['/yourorder']);
  }
  goBack(): void {
    this.location.back();
  }
}
