import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { AuthResponse } from '@auth/model/response.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginMode: boolean = true;
  loading: boolean = false;
  error: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  closeDialog($event: any) {
    console.log($event);
    console.log($event);
    this.error = '';
  }

  onSubmit(form: NgForm) {

    console.log(form.value);

    if(form.invalid) 
      return;
    
    const email = form.value.email;
    const password = form.value.password;

    this.loading = true;

    let authResponse: Observable<AuthResponse>;

    if(this.isLoginMode) {
      authResponse = this.authService.login(email, password)
    } else {
      authResponse = this.authService.signUp(email, password)
    }

    authResponse.subscribe(response => {
      this.loading = false;
      this.router.navigate(['/']);
    }, err => {
      this.error = err;     
      this.loading = false;
    })

    form.reset();
  }


}
