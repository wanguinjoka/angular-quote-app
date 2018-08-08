import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals = [
    new Goal(1, 'Watch find nemo','for my son',new Date(2018,4,5)),
    new Goal(2, 'buy cookies','jazz birth day',new Date(2018,6,6)),
    new Goal(3, 'get new phone case','old one broke',new Date(2019,1,15)),
    new Goal(4, 'solve math test','for that code war',new Date(2018,8,9)),
    new Goal(5, 'talk the talk','for the cat',new Date(2019,10,12)),
    new Goal(6, 'walkthe walk','for the dog',new Date(2019,1,1)),
  ]

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  deleteGoal(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
        if(toDelete){ this.goals.splice(index,1)}
    }
  }

toogleDetails(index){
  this.goals[index].showDescription =!this.goals[index].showDescription;
}
  constructor() { }

  ngOnInit() {
  }

}
