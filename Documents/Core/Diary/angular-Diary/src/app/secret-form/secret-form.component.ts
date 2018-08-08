import { Component, OnInit } from '@angular/core';
import { Idea } from '../idea';

@Component({
  selector: 'app-secret-form',
  templateUrl: './secret-form.component.html',
  styleUrls: ['./secret-form.component.css']
})
export class SecretFormComponent implements OnInit {
  newIdea = new Idea(new Date(),"","");
  @Output () addIdea=new EventEmitter<Idea>();

  submitIdea(){
    this.addIdea.emit(this.newIdea);
  }
  constructor() { }

  ngOnInit() {
  }

}
