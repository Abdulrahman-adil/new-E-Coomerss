import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import {  DIscountOffers } from '../Shaerd-Clases-Interfaces/shared-c-i-e';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productfromAPI: any=[];
  CatigoresfromAPI: any=[];
  errorMessage: any;
  clientName : string = "";
  isPurshased : boolean= true;
  discount : DIscountOffers;
  loding:boolean = false;
//========properties===========//
constructor(private productServesfromAPI:ProductServiceService,private router: Router){
 this.discount = DIscountOffers.noDiscount
}

ngOnInit(): void {
  this.getproductsFromAPI()
  this.getCategoryFromAPI()
}
getproductsFromAPI(){
  this.loding = true;
  this.productServesfromAPI.getTheAllProductFromIPI().subscribe(
{
  next:data=>this.productfromAPI= data,

  error:error=> this.errorMessage= error

}
  )
  }
getCategoryFromAPI(){
  this.productServesfromAPI.getAllCategoreis().subscribe((res:any) =>
{
console.log(res);
this.CatigoresfromAPI = res
})
}

    filterCat(event:any){
    let value = event.target.value
    // console.log(value);
    if(value == 'all'){
      this.getproductsFromAPI()
    } else{
      this.getProductsCat(value)
    }

    }

    getProductsCat(keyword:string){
      this.productServesfromAPI.getproductsByCategoreis(keyword).subscribe({
        next:data => this.productfromAPI = data
      })

    }


    redirect() {
      this.router.navigate(['products']);
  }

  // gotToProductDetails(prod:any){
  //   this.router.navigate(["/details",prod.id])
  // }
}


