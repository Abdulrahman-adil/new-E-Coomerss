import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {  Routes,Router } from '@angular/router';
import { PostsService } from '../posts-services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  posts: any=[];
  errorMessage: any;
  constructor(private router:Router,private postsService:PostsService,private activeRoute:ActivatedRoute){
    // this.id = this.activRoute.snapshot.paramMap.get("id")
    // console.log(this.id)
  }
  ngOnInit(): void {
    this.getPosts();
    // this.getComment();
}
getPosts(){
  this.postsService.getPostsDetails().subscribe({
    next:data=>this.posts= data,
    error:error=> this.errorMessage= error
  })
}

goToComments(){
  // go to comments page
 this.router.navigate(['/comments'],{relativeTo:this.activeRoute})
}
// getComment(){
//   this.postsServise.getCommentByID(this.id).subscribe(res =>{
//     this.data = res
//   })
// }


}

