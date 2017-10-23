import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatTabsModule,
  MatTableModule, MatCardModule, MatInputModule, MatIconModule, MatFormFieldModule,
  MatSelectModule, MatSnackBarModule, MatProgressBarModule} from '@angular/material';
import { Angular2TokenService } from 'angular2-token';
import { ImageUploadModule } from 'angular2-image-upload';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { PostComponent } from './post/post.component';
import { AprovePostComponent } from './approve-post/approve-post.component';
import { RankingPostComponent } from './ranking-post/ranking-post.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CommentComponent } from './comment/comment.component';
import { FileComponent } from './file/file.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RankService } from './ranking-post/shared/ranking-post.service';
import { PostService } from './post/shared/post.service';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { SearchPostComponent } from './post/search-post/search-post.component';
import { RouterModule } from '@angular/router';
import {TesteService} from "./teste/teste.service";


@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    PostComponent,
    AprovePostComponent,
    RankingPostComponent,
    GalleryComponent,
    CommentComponent,
    FileComponent,
    NavbarComponent,
    CreatePostComponent,
    SearchPostComponent
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
    ImageUploadModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: PostComponent},
      {path: 'search', component: SearchPostComponent},
      {path: 'create-post', component: CreatePostComponent},
      {path: 'create-file', component: FileComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'comments', component: CommentComponent},
      {path: 'approve-post', component: AprovePostComponent},
      {path: 'testes', component: TesteComponent},
    ])
  ],
  providers: [RankService, PostService, TesteService, Angular2TokenService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
