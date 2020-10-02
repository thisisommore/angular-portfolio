import {Component, OnInit, ElementRef, Renderer2, ViewChild, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMeComponent implements OnInit {



  constructor(private rederer: Renderer2) { }

  ngOnInit(): void {
  }




}
