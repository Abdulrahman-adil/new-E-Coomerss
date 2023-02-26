export interface IProduct{
  ID?: number,
  Name:string,
  Quantity :number,
  Price:number,
  img:string;
}
export interface ICategory{
  ID: number,
  Name:string
}

export enum DIscountOffers{
  noDiscount =  'No Discount',
  SecondValue = 0.15,
  thirdValue = 0.10
}
