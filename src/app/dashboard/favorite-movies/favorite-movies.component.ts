import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})

export class FavoriteMoviesComponent implements OnInit {

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _dashboardService: DashboardService
              ) { }

  ngOnInit(): void {}

  get getFavoriteFilms() {
    return this._dashboardService.onGetFavoriteFilms();
  }

  onDelete(index: number) {
    this._dashboardService.onDeleteFavoriteFilm(index);
  }

  onDetails(index: number) {
    this._dashboardService.passToDetails(this.getFavoriteFilms[index]);
    this._router.navigate(['../details'], { relativeTo: this._activatedRoute } );
  }

}
