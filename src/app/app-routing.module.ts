import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './HomePage/app-home.component';
import { AppWorkComponent } from './app-work/app-work.component';
import { AppContactComponent } from './app-contact/app-contact.component';

const AppRoutes : Routes = [{
    path: '', redirectTo: 'home' ,pathMatch: 'full'
},
{
    path: 'home',component: HomeComponent
},
{
    path: 'myWork', component: AppWorkComponent
},
{
    path: 'contact', component: AppContactComponent
}
]

@NgModule({
imports: [RouterModule.forRoot(AppRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule {}