import { Component, OnInit,ElementRef ,Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {



  constructor(private rederer: Renderer2) { }

  ngOnInit(): void {
  }




}
