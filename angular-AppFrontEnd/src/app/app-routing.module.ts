import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EateriesComponent } from './eateries/eateries.component';
import { EaterydetailsComponent } from './eaterydetails/eaterydetails.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'auth' , component: AuthComponent},
  { path: 'login', component:LoginComponent},
  { path: 'eateries', component: EateriesComponent,canActivate:[AuthGuard] },
  { path: 'detail/:Eid', component: EaterydetailsComponent },
  { path: 'yourorder', component: OrdersComponent },
  { path: 'mydetails', component: MydetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}