import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { EateriesComponent } from './eateries/eateries.component';
import { AppRoutingModule } from './/app-routing.module';
import { EaterydetailsComponent } from './eaterydetails/eaterydetails.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EateriesComponent,
    EaterydetailsComponent,
    OrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
