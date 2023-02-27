import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
 @Input() data:any[] = []
  detectChanges(event:any){

  }
  redirect(){}
}
