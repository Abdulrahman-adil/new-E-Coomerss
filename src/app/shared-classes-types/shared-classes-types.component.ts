import { Component } from '@angular/core';

export interface Iproduct{
  ID: number,
  Name:string,
  Quantity :number,
  Price:number,
  img:string
}
export interface ICategory{
  ID: number,
  Name:string
}

export enum DIscountOffers{
  FirstValue =  'No Discount',
  SecondValue = "10%",
  thirdValue = "14%"
}

@Component({
  selector: 'app-shared-classes-types',
  templateUrl: './shared-classes-types.component.html',
  styleUrls: ['./shared-classes-types.component.scss']
})
export class SharedClassesTypesComponent {

}
