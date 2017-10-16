import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class RankService {
  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  getRakingPosts(){
    return this.http.get(this.url + 'rankingPost')
      .map((res: Response) => res.json());
  }

}
