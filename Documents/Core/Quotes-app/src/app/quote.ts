export class Quote {
  public showDetails:boolean;
  constructor(public id:number,public message:string, public details:string ){
    this.showDetails=false
  }
}
