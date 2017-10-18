import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class CommentService {
  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  createComment(obj: any, id_post: number) {
    return this.http.post(this.url + 'post/' + id_post + 'comment', obj)
      .map((res: Response) => res.json());
  }

  getComments(id_post: number) {
    return this.http.get(this.url + 'post/' + id_post)
      .map((res: Response) => res.json());
  }

  getComment(id_post: number, pk: number) {
    return this.http.get(this.url + 'post/' + id_post + '/comment/' + pk)
      .map((res: Response) => res.json());
  }

  updateComment(obj: any, id_post: number, pk: number) {
    return this.http.put(this.url + 'post/' + id_post + '/comment/' + pk, obj)
      .map((res: Response) => res.json());
  }

  deleteComment(obj: any, id_post: number, pk: number) {
    return this.http.delete(this.url + 'post/' + id_post + '/comment/' + pk, obj)
      .map((res: Response) => res.json());
  }

}
