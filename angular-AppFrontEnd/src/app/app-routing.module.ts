import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EateriesComponent } from './eateries/eateries.component';
import { EaterydetailsComponent } from './eaterydetails/eaterydetails.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: 'api/:str', redirectTo: '/auth', pathMatch: "full" },
  { path: 'api/:str', component: AuthComponent },
  { path: 'auth' , component: AuthComponent},
  { path: 'login', component:LoginComponent},
  { path: 'eateries', component: EateriesComponent },
  { path: 'detail/:Eid', component: EaterydetailsComponent },
  { path: 'yourorder', component: OrdersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}