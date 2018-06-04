import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tokenfile } from './tokenfile';

/*
export interface tokenfile{
  "access_token" : string,
  "token_type" : string,
  "expires_in" : string,
  "refresh_token" : string,
  "scope" : string
}*/
const httpOptions = {
  headers: new HttpHeaders({
     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
     'Authorization' : 'Basic '+btoa("Dgz5dN2UNvrWeXzsgWj0H96viAznSA9akUcrFWFO:J4d3mGVzd3SUDA5oeOPQ0tmdCPkCEqLiroFeZC4UYzmfbd6JAyfut7lyE1ghWiexVaeCkW8NSALlK2KoRO4UgfDGBsrIlXJMqytDJXoasbT6nFD8AgWFPdbtM2S6aBmm") ,
    })
};

@Injectable({
  providedIn: 'root'
})


export class TokenService {
  tokenurl = "http://gymkhana.iitb.ac.in/sso/oauth/token/";
  reduri = "http://localhost:8000/api/login"
  constructor(private http:HttpClient) { }
  gettoken(authcode:string):Observable<Tokenfile>{
      var body = "code="+authcode+"&redirect_uri="+this.reduri+"&grant_type=authorization_code";
      return this.http.post<Tokenfile>(this.tokenurl,body,httpOptions);
  }
}
