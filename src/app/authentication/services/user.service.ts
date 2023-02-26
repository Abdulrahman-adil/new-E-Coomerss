import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/iUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="";
  constructor(private http:HttpClient) { }

  postUserToBackend(user:User){
    //Make http call to the backend
    this.http.post(this.baseUrl,user).subscribe({
      next:data => console.log(data),
      error:error => console.log(error)
    })
  }
}
