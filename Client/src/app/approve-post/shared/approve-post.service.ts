import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ApprovePostService {
  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  getApprovePosts() {
    return this.http.get(this.url + 'approvePost')
      .map((res: Response) => res.json());
  }

  updateApprovePost(obj: any) {
    return this.http.put(this.url + 'approvePost', obj)
      .map((res: Response) => res.json());
  }

  deletePost(obj: any) {
    return this.http.delete(this.url + 'approvePost', obj)
      .map((res: Response) => res.json());
  }

}
