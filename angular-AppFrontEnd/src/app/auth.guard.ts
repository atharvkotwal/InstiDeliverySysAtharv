import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserdetService } from './userdet.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userdetservice:UserdetService,private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      //To be Changed
      console.log('authguard true');
      this.userdetservice.logmsg += "Authgrd true "
      return true;
    //   if(localStorage.getItem('token')){
    //   this.userdetservice.mydetail().subscribe(data=>{
    //     localStorage.setItem('msg','auth guard returning true');
    //     console.log('authguard true');
    //     return true;
    //   })
    //   console.log('authguard false token expired');
    //   this.router.navigate(['login']);
    //   return false;
    // }
    // console.log('authguard false no token');
    // this.router.navigate(['login']);
    // return false;
      // if(this.userdetservice.checkifloggedin()){
      //   console.log('got true in authguard');
      //   return true;
      // }
      // console.log('got false in authguard')
      // this.router.navigate(['login']);
      // return false;      
  }
}
