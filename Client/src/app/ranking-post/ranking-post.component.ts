import { Component, OnInit } from '@angular/core';

import {Post} from '../models/post.model';
import {RankService} from './shared/ranking-post.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-ranking-post',
  templateUrl: './ranking-post.component.html',
  styleUrls: ['./ranking-post.component.css']
})
export class RankingPostComponent implements OnInit {
  posts: Post[] = [];
  displayedColumns: string[] = ['position', 'title'];
  dataSource: TableDataSource;
  data: Element[] = [];
  i = 0;
  constructor(private rankService: RankService) {
    rankService.getRakingPosts().subscribe((dataPost: Post[]) => {
      this.posts = dataPost;
      this.posts.forEach(post => {
        this.data.push({'position': this.i += 1, 'title': post.title} as Element);
      });
      this.dataSource = new TableDataSource(this.data);
    });
  }

  ngOnInit() {
  }
}

export interface Element {
  position: number;
  title: string;
}

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream.
 */
export class TableDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  constructor(private data: Element[]) {
    super();
  }
  connect(): Observable<Element[]> {
    return Observable.of(this.data);
  }
  disconnect() {}
}
