import { Component, OnInit } from '@angular/core';

import {Post} from '../models/post.model';
import {RankService} from './shared/ranking-post.service';

@Component({
  selector: 'app-ranking-post',
  templateUrl: './ranking-post.component.html',
  styleUrls: ['./ranking-post.component.css']
})
export class RankingPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private rankService: RankService) {
    rankService.getRakingPosts().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }

  ngOnInit() {}

}

