import { Component, OnInit } from '@angular/core';
import {Post} from "../models/post.model";
import {PostService} from "./shared/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {
    postService.getPosts(0, 10).subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}


