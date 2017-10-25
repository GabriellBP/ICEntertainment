import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Angular2TokenService } from 'angular2-token';
import { ImageUploadModule } from 'angular2-image-upload';
import { NgUploaderModule } from 'ngx-uploader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatTabsModule,
  MatTableModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule,
  MatSelectModule, MatSnackBarModule, MatProgressBarModule, MatExpansionModule} from '@angular/material';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { PostComponent } from './post/post.component';
import { AprovePostComponent } from './approve-post/approve-post.component';
import { RankingPostComponent } from './ranking-post/ranking-post.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CommentComponent } from './comment/comment.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankService } from './ranking-post/shared/ranking-post.service';
import { PostService } from './post/shared/post.service';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { SearchPostComponent } from './post/search-post/search-post.component';
import { RouterModule } from '@angular/router';
import { TesteService } from './teste/teste.service';
import { GetPostComponent } from './post/get-post/get-post.component';
import { FileService } from './file/shared/file.service';
import { CreateFileComponent } from './file/create-file/create-file.component';


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    PostComponent,
    AprovePostComponent,
    RankingPostComponent,
    GalleryComponent,
    CommentComponent,
    NavbarComponent,
    CreatePostComponent,
    SearchPostComponent,
    GetPostComponent,
    CreateFileComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule,
    ImageUploadModule.forRoot(),
    NgUploaderModule,
    RouterModule.forRoot([
      {path: '', component: PostComponent},
      {path: 'post/:id', component: GetPostComponent},
      {path: 'search', component: SearchPostComponent},
      {path: 'create-post', component: CreatePostComponent},
      {path: 'create-file/:id_post', component: CreateFileComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'comments', component: CommentComponent},
      {path: 'approve-post', component: AprovePostComponent},
      {path: 'testes', component: TesteComponent},
    ])
  ],
  providers: [RankService, PostService, TesteService, FileService, /*Angular2TokenService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
