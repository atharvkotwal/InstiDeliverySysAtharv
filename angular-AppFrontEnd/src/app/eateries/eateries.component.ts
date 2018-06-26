import { Component, OnInit } from '@angular/core';
import { Eatery } from '../eatery';
import { EaterydetService } from '../eaterydet.service';
// import { UserdetService } from '../userdet.service';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
// import { MydetailsComponent } from '../mydetails/mydetails.component';

@Component({
  selector: 'app-eateries',
  templateUrl: './eateries.component.html',
  styleUrls: ['./eateries.component.css']
})
export class EateriesComponent implements OnInit {
  eateries : Eatery[];

  constructor(private eaterydetservice : EaterydetService,
              // private route:ActivatedRoute,
              // private router:Router,
              // private userdetservice:UserdetService,
  ) { }

  ngOnInit() {
    this.getetrys();
  }
  
  getetrys():void{
    this.eaterydetservice.geteateries()
        .subscribe(etrys => {this.eateries = etrys.eateries;} );
  }
  getcolor(ftp){
    switch(ftp){
      case '2':return 'red';
      case '3':return 'yellow';
      default :return 'green';
    }
  }
} 
