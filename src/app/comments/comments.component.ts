import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts-services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit{
  id:any;
  data:any = {};
  constructor(private activRoute:ActivatedRoute,private service:PostsService){
    this.id = this.activRoute.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getComment();
  }
  getComment(){
    this.service.getCommentByID(this.id).subscribe(res =>{
      this.data = res
    })
  }
}
