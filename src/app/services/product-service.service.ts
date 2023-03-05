import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http:HttpClient) { }

  getAllProduct(){
    return this._http.get('https://fakestoreapi.com/products')
  }

  getAllCategories(){
    return this._http.get('https://fakestoreapi.com/products/categories')
  }

  getSpecificCategory(keyword:string){
    return this._http.get('https://fakestoreapi.com/products/category/' + keyword)
  }

  getProductByID(id:any){
    return this._http.get('https://fakestoreapi.com/products/' + id)
  }
}

