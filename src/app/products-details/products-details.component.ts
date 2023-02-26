import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data:any = {};
  isDisplay = false;
  constructor(private activRoute:ActivatedRoute,private service:ProductServiceService){
    this.id = this.activRoute.snapshot.paramMap.get("id")
    console.log(this.id)
  }
ngOnInit(): void {
this.getProduct()
}

getProduct(){
  this.service.getProductByID(this.id).subscribe(res =>{
    this.data = res
  })
}

toggleDisplay(){
  this.isDisplay = !this.isDisplay;
}
}
