import { Component , EventEmitter, OnInit, Output} from '@angular/core';
import {  DIscountOffers } from '../Shaerd-Clases-Interfaces/shared-c-i-e';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any=[];
  Catagories: any=[];
  errorMessage: any;
  clientName : string = "";
  isPurchased : boolean= true;
  discount : DIscountOffers;
  loading:boolean = false;
  cartProduct:any[] =[] // get the data from localStorage from this array
//========properties===========//
constructor(private productServes:ProductServiceService,private router: Router){
 this.discount = DIscountOffers.noDiscount
}

ngOnInit(): void {
  this.getAllProducts()
  this.getAllCategory()
}
getAllProducts(){
  this.loading = true;
  this.productServes.getAllProduct().subscribe((data:any) =>
  {
    this.products= data
    this.loading = false
  })
}

getAllCategory(){
  this.loading = true;
  this.productServes.getAllCategories().subscribe((res:any) =>
{
this.Catagories = res
this.loading = false
})
}

    filterCat(event:any){
    let value = event.target.value
    // console.log(value);
    if(value == 'all')
      this.getAllProducts()
      this.getProductsCat(value)
    }

    getProductsCat(keyword:string){
      this.loading = true;
      this.productServes.getSpecificCategory(keyword).subscribe((res:any) => {
        // next:data => this.productfromAPI = data
        this.products = res
        this.loading = false
      })

    }
    redirect() {
      this.router.navigate(['products']);
  }

  // gotToProductDetails(prod:any){
  //   this.router.navigate(["/details",prod.id])
  // }
  addToCart(event:any){
    // get the data from localStorage
    // this.cartProduct = localStorage.getItem("cart")

    // JSON.stringify() // send data
    // JSON.parse() //Receive Data
    // check if the cart in localStorage
    if('cart' in localStorage){
      this.cartProduct = JSON.parse(localStorage.getItem('cart')!)
      let exist = this.cartProduct.find(item => item.id == event.id)
      if(exist){
        alert("product is already in your cart")
      } else{
        this.cartProduct.push(event)
        localStorage.setItem("cart", JSON.stringify(this.cartProduct))
      }

    } else{
      this.cartProduct.push(event)
      localStorage.setItem("cart", JSON.stringify(this.cartProduct))
    }

  }
}


