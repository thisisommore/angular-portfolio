import {Component,HostListener,ViewChild,ElementRef,Renderer2, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls : ['./app-header.component.css']
})
export class HeaderComponent implements OnInit {

    innerWidth : any;
    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }
    constructor(private renderer: Renderer2){}

    @ViewChild('profile_image_header') profile_image_header: ElementRef;
    @ViewChild('nav_container_header') nav_container_header: ElementRef;
    @ViewChild('header') header: ElementRef;


    @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
    }

    @HostListener("window:scroll", []) onWindowScroll() {
        let headerData = {
            height: this.header.nativeElement.style.height,
            heightAfterScrollDown: (parseInt(this.header.nativeElement.style.height)/30).toString()+"px"
        }
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50 && this.innerWidth > 900) {
        
        this.renderer.setStyle(this.header.nativeElement,"height","60px")
        this.renderer.setStyle(this.profile_image_header.nativeElement,"height","40%");
        this.renderer.setStyle(this.profile_image_header.nativeElement,"marginTop","20px");
        this.renderer.setStyle(this.nav_container_header.nativeElement,"marginTop","20px");

    }
    else 
        {
            //.. Match for mobile view
            this.renderer.setStyle(this.header.nativeElement,"height","240px");
            this.renderer.setStyle(this.profile_image_header.nativeElement,"height","60%");
            this.renderer.setStyle(this.nav_container_header.nativeElement,"marginTop","40px");;
        }
  }
}