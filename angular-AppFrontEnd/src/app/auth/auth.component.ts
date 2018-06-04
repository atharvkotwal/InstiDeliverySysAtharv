import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
//import { TokenService } from './token.service';
import { Userfile } from './userfile';
import { Router } from '@angular/router';
import { UserdetService } from './userdet.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authcode:string;
  acctoken:string;
  worked:string = "false"
  userdet: any;
  url: string;
  //clientsecret: string = btoa("Dgz5dN2UNvrWeXzsgWj0H96viAznSA9akUcrFWFO:J4d3mGVzd3SUDA5oeOPQ0tmdCPkCEqLiroFeZC4UYzmfbd6JAyfut7lyE1ghWiexVaeCkW8NSALlK2KoRO4UgfDGBsrIlXJMqytDJXoasbT6nFD8AgWFPdbtM2S6aBmm");

  
  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private router:Router,
    private userdetservice:UserdetService
    //private tokenservice: TokenService,
  ) { }

  ngOnInit() {
    this.getauthcode();
  }
  getauthcode(){
    const str = this.route.snapshot.queryParamMap.get('code');
    this.authcode= str;
    this.url = "http://localhost:8000/api/login?state=some_state&code="+this.authcode;
  //   this.tokenservice.gettoken(this.authcode).subscribe((data:any)=>{
  //     this.acctoken= data.access_token;
  //     this.worked= true;
  //   });
}
  getuserdetails(){
    this.worked= "true";

    this.userdetservice.getuserdet(this.authcode)
        .subscribe(data=> {
          this.userdet = data;
          this.worked = "got user details"
        }      
        );
    //this.router.navigate(['/auth']);
  }
}
