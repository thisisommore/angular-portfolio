import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module'
import {HeaderComponent} from './Header/app-header.component'
import {HomeComponent} from './HomePage/app-home.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AppWorkComponent } from './app-work/app-work.component'
import { AboutMeComponent } from './about-me/about-me.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AppContactComponent,
    AppWorkComponent,
    AboutMeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
