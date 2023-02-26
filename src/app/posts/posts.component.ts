import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts-services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  // id:any;
  // data:any = {};
  //============================
  posts: any=[];
  errorMessage: any;
  constructor(private postsServise:PostsService,private activRoute:ActivatedRoute){
    // this.id = this.activRoute.snapshot.paramMap.get("id")
    // console.log(this.id)
  }
  ngOnInit(): void {
    this.getPosts();
    // this.getComment();
}

getPosts(){
  this.postsServise.getPostsDetails().subscribe({
    next:data=>this.posts= data,
    error:error=> this.errorMessage= error
  })
}

// getComment(){
//   this.postsServise.getCommentByID(this.id).subscribe(res =>{
//     this.data = res
//   })
// }


}

