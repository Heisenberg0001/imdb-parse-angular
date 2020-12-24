import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Credentials} from '../shared/models/credentials.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  private isLoginMode = true;
  private _email: string;
  private _passwd: string;

  public isIncorrect = false;


  constructor( private _router: Router,
               private authService: AuthService
  ) {}

  ngOnInit(): void {}

  public getLoginMode(): boolean {
    return this.isLoginMode;
  }

  public onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  public getEmail(): string {
    return this._email;
  }

  public getPasswd(): string {
    return this._passwd;
  }

  public onSubmit( form: NgForm ): void {

    if( form.invalid ) {
      return;
    }

    this.authService.credential = new Credentials();
    this.authService.credential.email    = form.value.email;
    this.authService.credential.password = form.value.password;

    this._router.navigate(["/dashboard"]);
  }

}
