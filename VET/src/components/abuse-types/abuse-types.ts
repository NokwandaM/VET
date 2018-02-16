import { Component } from '@angular/core';

/*
  Generated class for the AbuseTypes component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'abuse-types',
  templateUrl: 'abuse-types.html'
})
export class AbuseTypesComponent {

  text: string;

  constructor() {
    console.log('Hello AbuseTypes Component');
    this.text = 'Hello World';
  }

  public doughnutChartLabels:string[] = ['Violent', 'Verbal', 'Sexual'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
