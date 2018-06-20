import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';
import { EateriesComponent } from './eateries/eateries.component';
import { AppRoutingModule } from './/app-routing.module';
import { EaterydetailsComponent } from './eaterydetails/eaterydetails.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule }    from '@angular/common/http';
import { MydetailsComponent } from './mydetails/mydetails.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth.guard';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EateriesComponent,
    EaterydetailsComponent,
    OrdersComponent,
    LoginComponent,
    AuthComponent,
    MydetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
