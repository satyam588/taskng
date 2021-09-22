import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(
    public route: Router
  ) {
    // this.route.navigate(['/login']);
    localStorage.clear();
    window.location.href = '/login';
  }


}
