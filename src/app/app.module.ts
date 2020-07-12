import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module'
import {HeaderComponent} from './Header/app-header.component'
import {HomeComponent} from './HomePage/app-home.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppWorkComponent } from './app-work/app-work.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AppContactComponent,
    AppWorkComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
