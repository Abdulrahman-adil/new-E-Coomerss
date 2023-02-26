import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts-services/posts.service';
@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit{
  id:any;
  data:any = {};
  constructor(private activRoute:ActivatedRoute,private service:PostsService){
    this.id = this.activRoute.snapshot.paramMap.get("id")
    console.log(this.id)
  }
  ngOnInit(): void {
this.getPostID()
}

getPostID(){
  this.service.getPostByID(this.id).subscribe(res =>{
    this.data = res
  })
}
}
