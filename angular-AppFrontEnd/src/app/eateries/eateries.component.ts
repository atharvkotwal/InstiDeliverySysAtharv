import { Component, OnInit } from '@angular/core';
import { Eatery } from '../eatery';
import { EaterydetService } from '../eaterydet.service';

@Component({
  selector: 'app-eateries',
  templateUrl: './eateries.component.html',
  styleUrls: ['./eateries.component.css']
})
export class EateriesComponent implements OnInit {
  eateries : Eatery[];

  constructor(private eaterydetservice : EaterydetService) { }

  ngOnInit() {
    this.getetrys();
  }
  
  getetrys():void{
    this.eaterydetservice.geteateries()
        .subscribe(etrys => this.eateries = etrys );
  }

} 
