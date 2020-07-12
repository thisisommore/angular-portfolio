import {Component,HostListener,ViewChild} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls : ['./app-header.component.css']
})
export class HeaderComponent {

    @HostListener("window:scroll", []) onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
        document.getElementById("header").style.height = "80px";
        (<HTMLElement>document.getElementsByClassName("profile-image-header")[0]).style.height = "0";
        (<HTMLElement>document.getElementsByClassName("profile-image-header")[0]).style.border = "none";
        (<HTMLElement>document.getElementsByClassName("nav-container-header")[0]).style.marginTop="0";
    }
    else 
        {
            document.getElementById("header").style.height = "280px";
        (<HTMLElement>document.getElementsByClassName("profile-image-header")[0]).style.height = "60%";
            (<HTMLElement>document.getElementsByClassName("profile-image-header")[0]).style.border = "4px solid black";
            (<HTMLElement>document.getElementsByClassName("nav-container-header")[0]).style.marginTop="30px";
        }
  }
}