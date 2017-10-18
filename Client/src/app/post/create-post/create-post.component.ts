import { Component, OnInit } from '@angular/core';
import {PostService} from '../shared/post.service';
import {FileSelectDirective, FileDropDirective, FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  // public uploader: FileUploader = new FileUploader({url: URL});
  public uploader = new FileUploader({url: 'api/upload/'});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  constructor(private postService: PostService) {
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => { if ('ola')
      form.append('data', JSON.stringify('Ola')); };
  }
}
