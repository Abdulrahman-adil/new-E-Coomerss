import { Component } from '@angular/core';
import { User } from 'src/app/shared/iUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userModel:User=  new User('','','','','')
}
