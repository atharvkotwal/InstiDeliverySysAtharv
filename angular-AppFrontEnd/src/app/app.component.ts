import { Component, Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { UserdetService } from './userdet.service';

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
  showLoadingIndicator = false;
  constructor(private router: Router,private userdetservice:UserdetService) {
    // Subscribe to the router events observable
    this.router.events.subscribe((routerEvent: Event) => {

      // On NavigationStart, set showLoadingIndicator to ture
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
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
}
