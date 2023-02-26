import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { iUser } from '../shared/iUser';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 private UserUrl:string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }

  // getUserDetails(){
  //   return this.http.get('https://jsonplaceholder.typicode.com/users')
  // }

  getUserDetails():Observable<iUser[]>
  {
    return this.http.get<iUser[]>(this.UserUrl).pipe(catchError((err) => {
      return throwError(()=>err.message || "server Error")
    }));
  }
}
