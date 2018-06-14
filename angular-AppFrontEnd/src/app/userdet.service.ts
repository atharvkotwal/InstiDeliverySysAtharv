import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class UserdetService {
  logoutmsg: any;
  apibaseURL = environment.apibaseURL;
  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  loginuser(authcode:string){
    var myurl= this.apibaseURL+"login/?state=some_state&code="+authcode;
    return this.http.get(myurl);
    //this.userdetails = this.http.get(myurl); //WHY NOT WORKING
                // .pipe(
                //       tap(data=>this.router.navigate(['/eateries'])),
                // );
  }
  mydetail(){
    const tokn = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'JWT '+tokn })
    };
    var myurl= this.apibaseURL+"login/get_user/";
    return this.http.get(myurl,httpOptions);
                // .pipe(
                //       tap(data=>this.router.navigate(['/eateries'])),
                // );
  }
  logout(){
    const tokn = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'JWT '+tokn })
    };
    var myurl= this.apibaseURL+"logout/";
    this.http.get(myurl,httpOptions).subscribe(data=>{
      this.logoutmsg = data['message'];
      localStorage.clear();
      this.router.navigate(['login']);
    });
  }
  refreshtoken(){
    const tokn = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = {'token':tokn};
    const myurl = this.apibaseURL+"auth/refresh_token";
    return this.http.post(myurl,body,httpOptions);

  }
}
