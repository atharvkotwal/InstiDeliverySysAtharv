import { Component, OnInit } from '@angular/core';
import { Eatery } from '../eatery';
import { EaterydetService } from '../eaterydet.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-eateries',
  templateUrl: './eateries.component.html',
  styleUrls: ['./eateries.component.css']
})
export class EateriesComponent implements OnInit {
  eateries : Eatery[];
  description:string;
  image:string;

  constructor(private eaterydetservice : EaterydetService,
              private modalService: NgbModal,
              // private route:ActivatedRoute,
              private router:Router,
              public orderservice:OrderService,
  ) { }

  ngOnInit() {
    this.getetrys();
  }
  
  getetrys():void{
    this.eaterydetservice.geteateries()
        .subscribe(etrys => {this.eateries = etrys.eateries;} );
  }
  openWindowCustomClass(content, desc: string, img: string) {
    this.description = desc;
    this.image = img;
    this.modalService.open(content, { windowClass: 'dark-modal', centered: true });
  }
  addorder(fd): void {
    this.orderservice.add(fd);
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
  getcolor(ftp){
    switch(ftp){
      case '2':return 'red';
      case '3':return '#ff9100d3';
      default :return 'green';
    }
  }
} 
