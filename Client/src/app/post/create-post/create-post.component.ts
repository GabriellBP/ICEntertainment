import { Component, OnInit, ViewChild } from '@angular/core';
import {PostService} from '../shared/post.service';
/*import {FileSelectDirective, FileDropDirective, FileUploader} from 'ng2-file-upload';*/
import {Category} from '../../models/category.model';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
/*import {Angular2TokenService} from 'angular2-token';*/


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  @ViewChild('fileInput') fileInput;

  title: string;
  description: string;
  category: number;
  image: string;
  categories: Category[];
  formData = null;

  constructor(private postService: PostService, private snackBar: MatSnackBar,
              private router: Router, /*private tokenService: Angular2TokenService*/) {
    postService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
    /*this.tokenService.init();*/
  }

  submit() {
    this.snackBar.open(this.title + ' criado!', 'Fechar', {
      duration: 2000,
    });
    this.postService.createPost({
      'title': this.title, 'description': this.description,
      'category': this.category, 'author': 1, 'image_post': this.image
    }).subscribe(() => this.router.navigate(['']));

    // const fileBrowser = this.fileInput.nativeElement;
    // if (fileBrowser.files && fileBrowser.files[0]) {
    //   this.formData = new FormData();
    //   this.formData.append('image', fileBrowser.files[0]);
    // }
    // this.postService.createPost({
    //   'title': this.title, 'description': this.description,
    //   'category': this.category, 'author': 1, 'image_post': this.formData
    // }).subscribe(() => this.router.navigate(([''])));
  }
}

