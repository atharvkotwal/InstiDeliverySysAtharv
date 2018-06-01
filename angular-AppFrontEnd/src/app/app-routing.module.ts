import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EateriesComponent } from './eateries/eateries.component';
import { EaterydetailsComponent } from './eaterydetails/eaterydetails.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/eateries', pathMatch: 'full' },
  { path: 'eateries', component: EateriesComponent },
  { path: 'detail/:Eid', component: EaterydetailsComponent },
  { path: 'yourorder', component: OrdersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}