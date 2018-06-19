import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserdetService {
  logmsg: any;
  apibaseURL = environment.apibaseURL;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  loginuser(authcode: string) {
    var myurl = this.apibaseURL + "login/?state=some_state&code=" + authcode;
    return this.http.get(myurl);
  }
  mydetail() {
    const tokn = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'JWT ' + tokn })
    };
    var myurl = this.apibaseURL + "login/get_user/";
    return this.http.get(myurl, httpOptions);
  }
  logout() {
    const tokn = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'JWT ' + tokn })
    };
    var myurl = this.apibaseURL + "logout/";
    this.http.get(myurl, httpOptions).subscribe(data => {
      this.logmsg = data['message'];
      localStorage.clear();
      this.router.navigate(['login']);
    });
  }
  refreshtoken() {
    if (!localStorage.getItem('token')){ console.log(localStorage.length);return; };
    const tokn = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = { 'token': tokn };
    const myurl = this.apibaseURL + "auth/refresh_token";
    console.log('Making refresh request');
    //this.logmsg += " Refreshing token ";
    return this.http.post(myurl, body, httpOptions)
      .pipe(tap(data => {localStorage.setItem('token', data['token']);console.log("Refreshed Token");}));
  }
}
