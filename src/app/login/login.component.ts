import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: Router
  ) {
    this.init();
    this.form = this.fb.group({
      mobile: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  ngOnInit() { }

  init() {
    if (localStorage.getItem('mobile') !== null){
      this.route.navigate(['/post']);
    }
    console.log(localStorage.getItem('mobile'));
  }

  submitForm() {
    const formData = this.form.value;
    const loginData = {
      mobile: formData.mobile,
      password: formData.password
    };

    // this.http.post(`https://jsonplaceholder.typicode.com/users`, loginData).subscribe( result => {
    //   console.log(result);
    // })

    localStorage.setItem('mobile', formData.mobile);
    // this.route.navigate(['post']);
    window.location.href = '/post';
    // localStorage.getItem('mobile'); // getting
  }

}
