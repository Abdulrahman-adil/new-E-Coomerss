import { Component ,OnInit} from '@angular/core';
import { UsersService } from '../users-services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
users: any=[];
errorMessage: any;
  constructor(private userServices:UsersService){

  }

  ngOnInit(): void {
      this.getUsers()
  }

//   getUsers(){
//     this.userServices.getUserDetails().subscribe(
//   {
//     next:data=>this.users= data,
//     error:error=> this.errorMessage= error
//   }
// )}
getUsers(){
  this.userServices.getUserDetails().subscribe(
{
  next:data=>this.users= data,
  error:error=> this.errorMessage= error
}
)}


}
