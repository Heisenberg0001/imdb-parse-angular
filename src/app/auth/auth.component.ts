import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Credentials} from '../Models/credentials.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  private isLoginMode = true;
  isIncorrect = false;
  private _email: string;
  private _passwd: string;


  constructor( private _router: Router,
               private authService: AuthService
  ) {}

  ngOnInit(): void {

  }

  get loginMode() {
    return this.isLoginMode;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  get email() {
    return this._email;
  }

  get passwd() {
    return this._passwd;
  }

  onSubmit( form: NgForm ) {

    if( form.invalid ) {
      return;
    }

    this.authService.credential = new Credentials();
    this.authService.credential.email    = form.value.email;
    this.authService.credential.password = form.value.password;

    this._router.navigate(["/dashboard"]);
  }

}
