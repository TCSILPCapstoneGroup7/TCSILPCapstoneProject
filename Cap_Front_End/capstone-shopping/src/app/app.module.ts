import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { PhantomUserComponent } from './phantom-user/phantom-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderStatusComponent } from './order-status/order-status.component';
import { UserHomeComponent } from './user-home/user-home.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,

    PhantomUserComponent,
      OrderStatusComponent,
      UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
