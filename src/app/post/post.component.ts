import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  postData: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.getPost();
  }

  getPost() {
    this.http.get(`https://jsonplaceholder.typicode.com/posts`).subscribe( result => {
      this.postData = result;
    })
  }

  sendOfferId($id: any){
    this.router.navigate(['post-detail'], {queryParams:{id: $id}});
  }

}
