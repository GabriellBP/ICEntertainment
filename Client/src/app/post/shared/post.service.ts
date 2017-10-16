import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PostService {
  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  createPost(obj: any){
    return this.http.post(this.url + 'post', obj)
      .map((res: Response) => res.json());
  }

  getPosts(begin?: number, end?: number){
    let str = 'post';
    if (begin !== undefined && end !== undefined) {
      str += '/' + begin + '/' + end;
    }
    return this.http.get(this.url + str)
      .map((res: Response) => res.json());
  }

  getPost(pk: number){
    return this.http.get(this.url + 'post/' + pk)
      .map((res: Response) => res.json());
  }

  updatePost(obj: any, pk: number){
    return this.http.put(this.url + 'post/' + pk, obj)
      .map((res: Response) => res.json());
  }

  deletePost(obj: any, pk: number){
    return this.http.delete(this.url + 'post/' + pk, obj)
      .map((res: Response) => res.json());
  }

}
