import { Component } from '@angular/core';
import { User } from 'src/app/shared/iUser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userModel:User=  new User('','','','','')
  socials= ["facebook","twitter","google"];
  socialHasError:boolean = false
  // name:any = "abdo"
  constructor(private userService:UserService){}
  validateSocial(socialValue:any){

    if(socialValue === "default")
      this.socialHasError = true
      else
      this.socialHasError = false
  }
  submitData(){
    //Call The Service
    this.userService.postUserToBackend(this.userModel);
  }
}
