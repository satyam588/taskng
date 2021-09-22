import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap, map } from 'rxjs/operators';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-album',
  templateUrl: './post-album.component.html',
  styleUrls: ['./post-album.component.css']
})
export class PostAlbumComponent {

  albums: any;
  filteredAlbum!: Observable<any[]>;
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<any[]>;


  constructor(
    private http: HttpClient,
    private route: Router,
    private service: PostService
  ) {
    this.init();

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })
    )
  }

  init() {
    if (localStorage.getItem('mobile') === null){
      this.route.navigate(['/login']);

    }
    console.log(localStorage.getItem('mobile'));
  }


  filter(val: string): Observable<any[]> {
    return this.service.getData()
     .pipe(
       map(response => response.filter((option: { title: string; }) => {
         return option.title.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
   }

}
