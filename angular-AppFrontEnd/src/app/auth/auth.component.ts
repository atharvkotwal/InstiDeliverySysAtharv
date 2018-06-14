import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserdetService } from '../userdet.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authcode:string;
  
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private userdetservice:UserdetService
  ) { }

  ngOnInit() {
    this.getuserdetails();
  }
  getuserdetails(){
    var err = this.route.snapshot.queryParamMap.get('error');
    if(err=="access_denied"){
      alert("Your access to app is denied by sso server.\n Please login again!!!");
      this.router.navigate(['login']);
    }
    this.authcode = this.route.snapshot.queryParamMap.get('code');
    this.userdetservice.loginuser(this.authcode).subscribe(data=> {
      localStorage.setItem('token', data['token']);
      this.router.navigate(['eateries']);
    });
  }
}
