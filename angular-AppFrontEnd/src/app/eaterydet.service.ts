import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Eatery } from './eatery';
import { EATERIES } from './eaterylist';
@Injectable({
  providedIn: 'root'
})
export class EaterydetService {
  constructor() { }

  geteateries(): Observable<Eatery[]>{
    return of(EATERIES);
  }
  geteaterydet(id:number): Observable<Eatery>{
    return of(EATERIES.find(hro => hro.Eid === id));
  }
  
}
