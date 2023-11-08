import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PizzaInfoComponent } from './components/pizza-info/pizza-info.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsService } from './services/products.service';
import { OrderService } from './services/order.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from "ngx-lightbox";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PizzaInfoComponent,
    ProductsComponent,
    OrderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LightboxModule
  ],
  providers: [ProductsService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
