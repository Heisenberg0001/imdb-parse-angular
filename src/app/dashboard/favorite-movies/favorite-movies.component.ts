import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DashboardService} from '../dashboard.service';
import {Movie} from '../../shared/models/movie.model';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})

export class FavoriteMoviesComponent implements OnInit {

  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,
              private _dashboardService: DashboardService
              ) {}

  ngOnInit(): void {}

  public getFavoriteFilms(): Movie[] {
    return this._dashboardService.onGetFavoriteFilms();
  }

  public onDelete(index: number) {
    this._dashboardService.onDeleteFavoriteFilm(index);
  }

  public onDetails(index: number): void {
    this._dashboardService.passToDetails(this.getFavoriteFilms[index]);
    this._router.navigate(['../details'], { relativeTo: this._activatedRoute } );
  }

}
