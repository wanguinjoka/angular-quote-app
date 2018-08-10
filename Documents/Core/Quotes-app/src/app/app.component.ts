import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes-app';
  quotes =[
    new Quote('you may not be the best in the room but if you are in the room you stand a chance','Ikponmwosa Osakioduwa'),
    new Quote('the poor will always be amoung us','jesus christ'),
  ]
}
