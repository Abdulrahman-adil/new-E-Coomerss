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
  loading:boolean = false;
//========properties===========//
constructor(private productServesfromAPI:ProductServiceService,private router: Router){
 this.discount = DIscountOffers.noDiscount
}

ngOnInit(): void {
  this.getproductsFromAPI()
  this.getCategoryFromAPI()
}
getproductsFromAPI(){
  this.loading = true;
  this.productServesfromAPI.getTheAllProductFromIPI().subscribe((data:any) =>
  {
    this.productfromAPI= data
    this.loading = false
  })
}

getCategoryFromAPI(){
  this.loading = true;
  this.productServesfromAPI.getAllCategoreis().subscribe((res:any) =>
{
this.CatigoresfromAPI = res
this.loading = false
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
      this.loading = true;
      this.productServesfromAPI.getproductsByCategoreis(keyword).subscribe((res:any) => {
        // next:data => this.productfromAPI = data
        this.productfromAPI = res
        this.loading = false
      })

    }
    redirect() {
      this.router.navigate(['products']);
  }

  // gotToProductDetails(prod:any){
  //   this.router.navigate(["/details",prod.id])
  // }
}


