import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class Galleryervice {
  url = 'http://localhost:8000/api/';

  constructor(private http: Http) { }

  createImage(obj: any, pk: number){
    return this.http.post(this.url + 'post' + pk + '/image', obj)
      .map((res: Response) => res.json());
  }

  getImages(id_post: number){
    return this.http.get(this.url + 'post/' + id_post + '/image')
      .map((res: Response) => res.json());
  }

  getImage(id_post: number, pk: number){
    return this.http.get(this.url + 'post/' + id_post + '/image/' + pk)
      .map((res: Response) => res.json());
  }

  deleteImage(obj: any, id_post: number, pk: number){
    return this.http.delete(this.url + 'post/' + id_post + '/image/' + pk, obj)
      .map((res: Response) => res.json());
  }

}
