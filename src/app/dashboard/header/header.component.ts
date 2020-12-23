import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable()

export class HeaderComponent implements OnInit {

  constructor( private _router: Router,
               private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }

  onFavoritesClicked() {
    this._router.navigate(['favorites'], { relativeTo: this._activatedRoute});
  }

  onTopMoviesClicked() {
    this._router.navigate(['top-movies'], { relativeTo: this._activatedRoute});
  }

  onLogoutClicked() {
    this._router.navigate(['/login']);
  }
}
