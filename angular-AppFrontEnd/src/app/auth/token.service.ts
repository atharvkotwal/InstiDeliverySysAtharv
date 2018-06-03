import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface tokenfile{
  "access_token" : string,
  "token_type" : string,
  "expires_in" : string,
  "refresh_token" : string,
  "scope" : string
}
const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
     'Authorization' : 'Basic RGd6NWROMlVOdnJXZVh6c2dXajBIOTZ2aUF6blNBOWFrVWNyRldGTzpKNGQzbUdWemQzU1VEQTVvZU9QUTB0bWRDUGtDRXFMaXJvRmVaQzRVWXptZmJkNkpBeWZ1dDdseUUxZ2hXaWV4VmFlQ2tXOE5TQUxsSzJLb1JPNFVnZkRHQnNySWxYSk1xeXRESlhvYXNiVDZuRkQ4QWdXRlBkYnRNMlM2YUJtbQ==',
    })
};

@Injectable({
  providedIn: 'root'
})


export class TokenService {
  tokenurl = "http://gymkhana.iitb.ac.in/sso/oauth/token/";
  reduri = "http://localhost:8000/api/login"
  constructor(private http:HttpClient) { }
  gettoken(authcode:string){
      var body = "code="+authcode+"&redirect_uri="+this.reduri+"&grant_type=authorization_code";
      return this.http.post(this.tokenurl,body,httpOptions);
  }
}
