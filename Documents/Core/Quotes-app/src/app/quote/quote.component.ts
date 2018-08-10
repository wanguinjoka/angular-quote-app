import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote('you may not be the best in the room but if you are in the room you stand a chance','Ikponmwosa Osakioduwa'),
    new Quote('the poor will always be amoung us','jesus christ'),
  ]
  constructor() { }

  ngOnInit() {
  }

}
