import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Credentials} from '../Models/credentials.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private userArr = ["george.chlaidze@gmail.com", "123456"];
  credential: Credentials;


  constructor(  private router: Router){}


  isAuthenticated() {
    if(this.credential.email && this.credential.password) {
      return this.credential.email === this.userArr[0] && this.credential.password === this.userArr[1];
    } else {
      return false;
    }
  }

}
