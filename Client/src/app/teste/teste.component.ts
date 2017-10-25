import { Component, OnInit, EventEmitter } from '@angular/core';
import {TesteService} from './teste.service';
import {FileHolder} from 'angular2-image-upload';
import {Router} from '@angular/router';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import {Http, RequestOptions, Headers } from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
  apiEndPoint = 'http://127.0.0.1:8000/api/test';
  title: string;
  description: string;
  formData: FormData;
  options: RequestOptions;

  constructor(private testeService: TesteService, private router: Router, private http: Http) {
  }

  ngOnInit() { }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      this.formData = new FormData();
      this.formData.append('uploadFile', file, file.name);
      const headers = new Headers();
      /** No need to include Content-Type in Angular 4 */
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Content-Disposition',   'attachment; filename=upload.jpg');
      // headers.append('Accept', 'application/json');
      this.options = new RequestOptions({headers: headers});
      console.log('Passou aqui');
    }
  }
  submit(formData: FormData, options: RequestOptions) {
    this.http.post(`${this.apiEndPoint}`, formData, options)
      .map(res => res.json())
      .catch(error => Observable.throw(error))
      .subscribe(
        data => console.log('success'),
        error => console.log('Ola', error, 'Gabriel')
      );
  }
}
// (uploadFinished)="onUploadFinished($event)"
  //

// this.testeService.createPost({
//   'title': 'Olaaaa', 'description': 'OlaOla',
//   'category': 1, 'author': 1, 'image_post': 'ola'
// }).subscribe(() => this.router.navigate(['']));
// console.log('jacaré');
// .subscribe(() => this.router.navigate(['']));
// const fileBrowser = this.fileInput.nativeElement;
// if (fileBrowser.files && fileBrowser.files[0]) {
//   this.formData = new FormData();
//   this.formData.append('image', fileBrowser.files[0]);
// }
// this.postService.createPost({
//   'title': this.title, 'description': this.description,
//   'category': this.category, 'author': 1, 'image_post': this.formData
// }, this.tokenService).subscribe(() => this.router.navigate(([''])));
