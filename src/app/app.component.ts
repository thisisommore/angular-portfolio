import { Component , ChangeDetectionStrategy} from '@angular/core';
import { slideInAnimation } from './route-animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app-portfolio';
}
