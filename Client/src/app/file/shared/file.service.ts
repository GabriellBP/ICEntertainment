import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class FileService {
  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  createFile(obj: any, id_post: number){
    return this.http.post(this.url + 'post/' + id_post + '/file', obj)
      .map((res: Response) => res.json());
  }

  getFiles(id_post: number){
    return this.http.get(this.url + 'post/' + id_post + '/file')
      .map((res: Response) => res.json());
  }

  getFile(id_post: number, pk: number){
    return this.http.get(this.url + 'post/' + id_post + '/file/' + pk)
      .map((res: Response) => res.json());
  }

  updatePost(id_post: number, pk: number, obj: any){
    return this.http.put(this.url + 'post/' + id_post + '/file/' + pk, obj)
      .map((res: Response) => res.json());
  }

  deleteFile(id_post: number, pk: number, obj: any){
    return this.http.delete(this.url + 'post/' + id_post + '/file/' + pk, obj)
      .map((res: Response) => res.json());
  }

}
