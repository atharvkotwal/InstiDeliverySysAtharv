import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tokenfile } from './tokenfile';
import { Router } from '@angular/router';
import { catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserdetService {

  constructor(
    private http:HttpClient,
    private router:Router
  ) { }
  getuserdet(authcode:string){
    var myurl= "http://localhost:8000/api/login/get_user?state=some_state&code="+authcode;
    return this.http.get(myurl);
                // .pipe(
                //       tap(data=>this.router.navigate(['/eateries'])),
                // );
  }
  
}
