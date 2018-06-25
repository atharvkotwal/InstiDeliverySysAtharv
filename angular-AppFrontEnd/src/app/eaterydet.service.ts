import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Eatery,Alleateries } from './eatery';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EaterydetService {
  EATERIES : Alleateries;
  apibaseURL = environment.apibaseURL;
  constructor(private http:HttpClient) { }

  geteateries():Observable<Alleateries>{
    if(this.EATERIES){
      console.log('has data no need to make request')
      return of(this.EATERIES);
    }

    console.log('getting details from server');
    return this.http.get<Alleateries>(this.apibaseURL+"menus/eatery_list/").pipe(tap(data=>{this.EATERIES = data}))
  }
  geteaterydet(id:number){
    return of(this.EATERIES.eateries.find(hro => hro.Eid == id));
  }
}
