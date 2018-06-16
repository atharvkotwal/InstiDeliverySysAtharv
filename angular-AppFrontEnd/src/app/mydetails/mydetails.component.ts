import { Component, OnInit } from '@angular/core';
import { UserdetService  } from '../userdet.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {
  mydetails:any;
  token : string;
  wait:string;
  constructor(
    public userdetservice: UserdetService,
    private location:Location
  ) { }

  ngOnInit() {
    this.wait = "Loading..."
    this.getmydetails();
    this.token = localStorage.getItem('token');
  }
   getmydetails(){
     this.userdetservice.mydetail().subscribe(data=>{
       this.mydetails = data;
       this.wait = "Your Details are";
     })
   }
   goBack(){
     this.location.back();
   }
}
