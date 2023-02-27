import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/iUser';
import { ForbiddenName } from '../Custom-validation/user.validator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit{
   products= ["lapTop","Mobile","Tv","Clothes","accessories"];
  //  productHasError:boolean = false
constructor(private formBuild:FormBuilder,private userService:UserService){}

//=============Reactive Forms=================

registerAdmin=this.formBuild.group(
  {
    uName:['',[Validators.required,ForbiddenName]],
    selectProduct:[''],
    input:[''],
    hasDiscount:[false]
  }
)
  //=============Reactive Forms================
ngOnInit(): void {

}
setValid(){
  this.registerAdmin.get('hasDiscount')?.valueChanges.subscribe(checkedvalue => {
    if(checkedvalue) {
      this.input?.setValidators(Validators.required)
    }else{
      this.input?.clearValidators();
    }
    this.input?.updateValueAndValidity();
  } )
}
get uName(){
return this.registerAdmin.get('uName')
}
get selectProduct(){
  return this.registerAdmin.get('selectProduct')
  }

  get input(){
    return this.registerAdmin.get('input')
    }

}
