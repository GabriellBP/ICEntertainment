import {Component, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {PostService} from './shared/post.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {
    postService.getPosts().subscribe((data: any) => {
      this.posts = data.results;
    });
  }

  goTo(id: number) {
    this.router.navigate(['post', id]);
  }

  ngOnInit() {
  }

}
