import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Angular2TokenService} from 'angular2-token';

@Injectable()
export class PostService {
  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  // createPost(obj: any, tokenService: Angular2TokenService) {
  //   const headers = tokenService.currentAuthHeaders;
  //   headers.delete('Content-Type');
  //   const options = new RequestOptions({ headers: headers });
  //
  //   return tokenService.request({
  //     method: 'post',
  //     url: this.url + 'post',
  //     body: obj,
  //     headers: options.headers
  //   }).map((res: Response) => res.json());
  // }

  createPost(obj: any) {
    return this.http.post(this.url + 'post', obj)
      .map((res: Response) => res.json());
  }

  getCategories() {
    return this.http.get(this.url + 'categoryList')
      .map((res: Response) => res.json());
  }

  getPosts(page?: string) {
    let str = 'post';
    if (page !== undefined) {
      str += page;
    }
    return this.http.get(this.url + str)
      .map((res: Response) => res.json());
  }

  getPost(pk: number) {
    return this.http.get(this.url + 'post/' + pk)
      .map((res: Response) => res.json());
  }

  searchPosts(search: string) {
    return this.http.get(this.url + 'post?search=' + search)
      .map((res: Response) => res.json());
  }

  getAuthor(pk: number) {
    return this.http.get(this.url + 'user/' + pk)
      .map((res: Response) => res.json());
  }

  getFiles(idPost: number) {
    return this.http.get(this.url + 'post/' + idPost + '/file')
      .map((res: Response) => res.json());
  }

  updatePost(obj: any, pk: number) {
    return this.http.put(this.url + 'post/' + pk, obj)
      .map((res: Response) => res.json());
  }

  deletePost(obj: any, pk: number) {
    return this.http.delete(this.url + 'post/' + pk, obj)
      .map((res: Response) => res.json());
  }

}
