import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RaiseTicketComponent } from './components/raise-ticket/raise-ticket.component';
import { SelectItemsComponent } from './components/select-items/select-items.component';
import { DeleteItemsComponent } from './components/delete-items/delete-items.component';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    RaiseTicketComponent,
    SelectItemsComponent,
    DeleteItemsComponent,
    ViewItemsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
