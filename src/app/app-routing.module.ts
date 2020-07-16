import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './HomePage/app-home.component';
import { AppWorkComponent } from './app-work/app-work.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { AboutMeComponent } from './about-me/about-me.component';

const AppRoutes : Routes = [{
    path: '', redirectTo: 'home' ,pathMatch: 'full'
},
{
    path: 'home',component: HomeComponent , data: {animation: 'Home'}
},
{
    path: 'myWork', component: AppWorkComponent 
},
{
    path: 'contact', component: AppContactComponent , data: {animation: 'Contact'}
},
{
    path: 'aboutMe', component: AboutMeComponent , data: {animation: 'About'}
}
]

@NgModule({
imports: [RouterModule.forRoot(AppRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule {}