import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  @ViewChild('content')
  content: ElementRef;

  constructor() {
    window.onresize = () => {
      this.setContentHeight();
    };
  }

  ngOnInit() {
    this.setContentHeight();
  }

  setContentHeight() {
    this.content.nativeElement.style.height = window.innerHeight - 64 + 'px';
    this.content.nativeElement.style.width = window.innerWidth - 350 + 'px';
  }
}
