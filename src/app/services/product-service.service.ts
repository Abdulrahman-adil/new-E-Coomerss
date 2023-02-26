import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http:HttpClient) { }

  getTheAllProductFromIPI(){
    return this._http.get('https://fakestoreapi.com/products')
  }

  getAllCategoreis(){
    return this._http.get('https://fakestoreapi.com/products/categories')
  }

  getproductsByCategoreis(keyword:string){
    return this._http.get('https://fakestoreapi.com/products/category/' + keyword)
  }

  getProductByID(id:any){
    return this._http.get('https://fakestoreapi.com/products/' + id)
  }
}

