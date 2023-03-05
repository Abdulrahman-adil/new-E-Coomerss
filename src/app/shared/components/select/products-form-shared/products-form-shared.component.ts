import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-products-form-shared',
  templateUrl: './products-form-shared.component.html',
  styleUrls: ['./products-form-shared.component.scss']
})
export class ProductsFormSharedComponent {
  @Input() data:any = {}
  @Output() item = new EventEmitter()
  add() {
    this.item.emit(this.data)
  }
}
