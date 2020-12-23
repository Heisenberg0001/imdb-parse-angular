import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DashboardGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.isAuthenticated()) {
        this.router.navigate(['/login']);
        return false;
    } else {
        return true;
    }

  }
}
