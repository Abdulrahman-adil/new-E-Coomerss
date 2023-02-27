import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { iPosts } from '../shared/Iposts';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getPostsDetails(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getPostByID(id:any){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  // getCommentByID(id:any){
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts' + id + '/comments')
  // }

  // getUserDetails():Observable<iUser[]>
  // {
  //   return this.http.get<iUser[]>(this.UserUrl).pipe(catchError((err) => {
  //     return throwError(()=>err.message || "server Error")
  //   }));
  // }
}
