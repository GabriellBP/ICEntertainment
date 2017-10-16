import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule} from '@angular/material';
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
import {RankService} from './ranking-post/shared/ranking-post.service';
import {PostService} from "./post/shared/post.service";

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
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [RankService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
