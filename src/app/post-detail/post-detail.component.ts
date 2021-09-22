import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id: any;
  singlePost: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {
    this.init();
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.id = params.id;
        // console.log(this.id);
        this.getPost(this.id)
      }
    );
  }

  init() {
    if (localStorage.getItem('mobile') === null){
      this.router.navigate(['/login']);

    }
    console.log(localStorage.getItem('mobile'));
  }

  getPost($id: any) {
    console.log($id);
    this.http.get(`https://jsonplaceholder.typicode.com/posts/${$id}`).subscribe( result => {
      this.singlePost = result;
      console.log(result);
    })

  }

}
