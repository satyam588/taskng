import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: any;
  constructor() {
    this.loggedIn = localStorage.getItem('mobile');
  }

  ngOnInit(): void {
  }

}
