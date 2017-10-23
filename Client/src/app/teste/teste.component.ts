import { Component, OnInit } from '@angular/core';
import {TesteService} from './teste.service';
import {FileHolder} from 'angular2-image-upload';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  constructor(private testeService: TesteService) { }

  ngOnInit() {
  }
  // (uploadFinished)="onUploadFinished($event)"

  submit(file: FileHolder) {
    console.log('oioioioi');
    this.testeService.createPost({
      'title': 'Olaaaa', 'description': 'OlaOla',
      'category': 1, 'author': 1, 'image_post': 'ola'
    });
    console.log('jacaré');
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
  }

}
