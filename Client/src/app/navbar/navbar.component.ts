import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home_buttom() {
    this.router.navigate(['']);
  }

  search_buttom() {
    this.router.navigate(['search']);
  }

  create_post_buttom() {
    this.router.navigate(['create-post']);
  }
}

