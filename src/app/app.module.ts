import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ctg1Component } from './ctg1/ctg1.component';
import { Ctg2Component } from './ctg2/ctg2.component';
import { Ctg3Component } from './ctg3/ctg3.component';
import { Ctg4Component } from './ctg4/ctg4.component';
import { CartComponent } from './cart/cart.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Ctg1Component,
    Ctg2Component,
    Ctg3Component,
    Ctg4Component,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
