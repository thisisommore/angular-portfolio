import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-work',
  templateUrl: './app-work.component.html',
  styleUrls: ['./app-work.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
