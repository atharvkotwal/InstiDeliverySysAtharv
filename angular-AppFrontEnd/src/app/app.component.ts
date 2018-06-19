import { Component, Injectable, OnChanges } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { UserdetService} from './userdet.service';

// var userstatus = false;

// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'IIT BOMBAY Delivery System';
  // msg:any ; USED THESE FOR DETECTION OF BUG
  // no = 0;
  showLoadingIndicator = false;
  constructor(private router: Router,public userdetservice:UserdetService) {
    // Subscribe to the router events observable
    this.router.events.subscribe((routerEvent: Event) => {
      // On NavigationStart, set showLoadingIndicator to ture
      // this.userdetservice.logmsg +=" in event ";
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
        console.log('in events');
        // this.userdetservice.logmsg += " going to refresh function() "+this.no +" ";
        //this.no+=1;                                            USED THESE FOR DETECTION OF BUG
        this.userdetservice.refreshtoken().subscribe();
      }

      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false
      if (routerEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }

    });
  }

  logout(){
    this.userdetservice.logout();
    //userstatus = false;
  }
  mydetails(){
    this.router.navigate(['mydetails']);
  }
  // refmsg(){
  //   this.msg = localStorage.length;
  //   // this.msg = localStorage.getItem('msg');
  // }
}
