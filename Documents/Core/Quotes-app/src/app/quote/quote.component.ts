import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes =[
    new Quote(1,'you may not be the best in the room but if you are in the room you stand a chance','Ikponmwosa Osakioduwa',new Date(2018,7,10)),
    new Quote(2,'the poor will always be amoung us','jesus christ',new Date (2018,7,5)),
  ]

  toogleDetails(index){
    this.quotes[index].showDetails =!this.quotes[index].showDetails;
  }

  completeQuote(isComplete,index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
