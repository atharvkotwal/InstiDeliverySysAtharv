import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Eatery } from '../eatery';
import { FoodDetails, FoodType } from '../fooddetails';
import { EaterydetService } from '../eaterydet.service';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eaterydetails',
  templateUrl: './eaterydetails.component.html',
  styleUrls: ['./eaterydetails.component.css']
})
export class EaterydetailsComponent implements OnInit {
  @Input() eatery: Eatery;
  fdetails: FoodType[];
  description: string;
  image: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private eaterydetservice: EaterydetService,
    private orderservice: OrderService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getetrydet();
  }
  getetrydet(): void {
    const id = +this.route.snapshot.paramMap.get('Eid');
    this.eaterydetservice.geteaterydet(id).subscribe(etry => this.eatery = etry);
    this.fdetails = this.eatery.Menu;
  }
  openWindowCustomClass(content, desc: string, img: string) {
    this.description = desc;
    this.image = img;
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true });
  }
  placeorder(): void {
    this.orderservice.order(this.eatery);
    this.router.navigate(['/yourorder']);
  }
  goBack(): void {
    this.location.back();
  }
  add(fd) {
    if (fd.qty) {
      fd.qty += 1; return;
    }
    fd.qty = 0;
    fd.qty += 1;
  }
  minus(fd) {
    if (fd.qty) {
      fd.qty -= 1;
    }
  }
}
