import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, map } from 'rxjs/operators';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  opts = [] as  any;

  getData() {

    return this.opts.length ?
      of(this.opts) :
      this.http.get('https://jsonplaceholder.typicode.com/albums/1/photos/').pipe(tap(data => this.opts = data))
  }
}
