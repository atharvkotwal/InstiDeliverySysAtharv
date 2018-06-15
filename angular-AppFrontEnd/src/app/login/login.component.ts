import { Component, OnInit } from '@angular/core';
import { UserdetService } from '../userdet.service';
import { Router } from '@angular/router';
//import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string; 
  constructor(
    public userdetservice:UserdetService,
    private router:Router,
    //public appcomp:AppComponent
  ) { }

  ngOnInit() {
    this.msg = this.userdetservice.logoutmsg;
    this.checkifloggedin();
  }
  checkifloggedin(){
    if(localStorage.length != 0){
      this.userdetservice.mydetail().subscribe(data=>{
        this.router.navigate(['eateries']);
      })
      return
    }
    return
  }

}
