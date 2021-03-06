import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


import { OrderStatusComponent } from './order-status/order-status.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { FundsComponent } from './funds/funds.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';
import { EmpSigninComponent } from './emp-signin/emp-signin.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminUpdateComponent } from './admin-update/admin-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AdminComponent,
    UserSignUpComponent,
    UserPanelComponent,
    EmployeeAddComponent,
    EmployeeDeleteComponent,
    UserSignInComponent,
    UserHomeComponent,
    FundsComponent,
    EditUserComponent,
    OrderStatusComponent,
    EmpSigninComponent,
    AdminAddComponent,
    AdminDeleteComponent,
    AdminUpdateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
