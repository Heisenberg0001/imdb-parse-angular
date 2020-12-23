import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Movie} from '../../Models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit, OnDestroy {
  foundFilm: Movie;
  private _foundFilmSubscription: Subscription;

  constructor( private _dashboardService: DashboardService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.foundFilm = this._dashboardService.getFilm();
  }

  ngOnDestroy() {
    if(this._foundFilmSubscription){
      this._foundFilmSubscription.unsubscribe();
    }
  }

  onDetails() {
    this._dashboardService.setFilmDetails(this.foundFilm);
    this._router.navigate(['../details'], { relativeTo: this._activatedRoute });
  }

  addToFavorites() {
    if(this._dashboardService.addToFavorites()){
      alert("Film: \"" + this._dashboardService.getFilm()['Title'] + "\" was Added to Favorites!");
    } else {
      alert("Film: \"" + this._dashboardService.getFilm()['Title'] + "\" Already exists !");
    }
  }

  submitTitleForm(form: NgForm) {
    if( form.valid ){
      this._foundFilmSubscription = this._dashboardService.getFilmByTitle( form.value['t'], form.value['y']).subscribe(
        (film) => {
          this.foundFilm = film;
          this._dashboardService.setFilm(film);
        }
      )
    }
  }

  submitIdForm(form: NgForm) {
    if( form.valid ){
      this._foundFilmSubscription = this._dashboardService.getFilmById( form.value['i']).subscribe(
        (film) => {
          this.foundFilm = film;
          this._dashboardService.setFilm(film);
        }
      )
    }
  }

  onReset(form: NgForm) {
    form.reset();
  }
}
