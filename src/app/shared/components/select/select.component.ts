import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
 @Input() data:any[] = [] // from child to parent
 @Output() selectedData = new EventEmitter()
 detectChanges(event:any){
  this.selectedData.emit(event)
  }
  // redirect(){}
}
