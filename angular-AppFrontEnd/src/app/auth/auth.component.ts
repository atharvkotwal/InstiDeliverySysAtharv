import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { TokenService } from './token.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authcode:string;
  acctoken:string;
  worked:boolean = false;
  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private tokenservice: TokenService
  ) { }

  ngOnInit() {
    this.getauthcode();
  }
  getauthcode(){
    const str = this.route.snapshot.queryParamMap.get('code');
    this.authcode= str;
    this.tokenservice.gettoken(this.authcode).subscribe((data:any)=>{
      this.acctoken= data.access_token;
      this.worked= true;
    });
  }
}
