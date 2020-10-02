import {Component, OnInit, ViewChild, Renderer2, ElementRef, ChangeDetectionStrategy} from '@angular/core';
import {NgForm} from '@angular/forms'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppContactComponent implements OnInit {


  @ViewChild('error') errorView :ElementRef;
  @ViewChild('success') successView :ElementRef;
  constructor(private MakeHttpReq : HttpClient, private renderer : Renderer2) {}

  url = "https://polar-ocean-56832.herokuapp.com/email"
  ngOnInit(): void {
  }

  onSubmit(formData: NgForm)
  {
    this.MakeHttpReq.post(this.url,{
      feedback: formData.value.feedback
    }).subscribe(()=>{
      this.renderer.setStyle(this.successView.nativeElement,"display","block")
      setTimeout(()=>{
        this.renderer.setStyle(this.successView.nativeElement,"display","none")
      },2000)
    },
    ()=>{
      this.renderer.setStyle(this.errorView.nativeElement,"display","block")
      setTimeout(()=>{
        this.renderer.setStyle(this.errorView.nativeElement,"display","none")
      },2000)
    });
  }

  redirect(link){
    document.location.href = link;
  }

}
