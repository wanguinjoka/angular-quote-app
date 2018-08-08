import { Component, OnInit } from '@angular/core';
import {Idea} from  '../idea'

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {
 ideas=[
   new Idea(new Date(2018,6,25),'joined moringa school','its hard but my God is greater')
 ]
 addNewIdea(idea){
   let ideaLength= this.ideas.length;
   idea.entryDate =new Date(idea.entryDate)
   this.ideas.push(idea)
 }

  constructor() { }

  ngOnInit() {
  }

}
