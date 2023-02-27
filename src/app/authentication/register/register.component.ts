import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/iUser';
import { confirmPasswordValid } from '../Custom-validation/password-validator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private userService:UserService, private formBuild:FormBuilder){}
  validateSocial(socialValue:any){

    if(socialValue === "default")
      this.socialHasError = true
      else
      this.socialHasError = false
  }

  //============================================
  userModel:User=  new User('','','','','')
  socials= ["facebook","twitter","google"];
  socialHasError:boolean = false
  isDisabled:boolean = true
  //============================================
  //=============Reactive Forms=================
  // registration=new FormGroup({
  //   userName:new FormControl(''),
  //   email:new FormControl(''),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  // });

  registration=this.formBuild.group({
    userName:['',[Validators.required,Validators.minLength(5),Validators.pattern("^[A-Z]+[a-z]+$")]],
    email:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    confirmPassword:['',Validators.required],
  },{validator:[confirmPasswordValid]});
  //=============Reactive Forms================

get userName(){
return this.registration.get('userName')
}
get email(){
  return this.registration.get('email')
  }

  get password(){
    return this.registration.get('password')
  }
  submitData(){
    //Call The Service
    this.userService.postUserToBackend(this.userModel);
  }
}
