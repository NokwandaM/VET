import { Component } from '@angular/core';

/*
  Generated class for the PopularSafeHouse component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'popular-safe-house',
  templateUrl: 'popular-safe-house.html'
})
export class PopularSafeHouseComponent {

  text: string;

  constructor() {
    console.log('Hello PopularSafeHouse Component');
    this.text = 'Hello World';
  }

  public radarChartLabels:string[] = ['Pretoria', 'Johannesburg', 'Hammanskraal', 'Centurion', 'Thohoyandou', 'Nelspruit', 'Westrand'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Violence'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Sexual'}
  ];
  public radarChartType:string = 'radar';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
