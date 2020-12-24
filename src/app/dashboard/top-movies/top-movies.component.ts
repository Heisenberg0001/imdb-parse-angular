import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Movie} from '../../shared/models/movie.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css']
})
export class TopMoviesComponent implements OnInit, OnDestroy {
  private _foundFilmSubscription: Subscription;

  public foundFilm: Movie;
  public correctIdFiledValue = true;
  public correctTitleFiledValue = true;

  constructor( private _dashboardService: DashboardService,
               private _router: Router,
               private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.foundFilm = this._dashboardService.getFilm();
  }

  ngOnDestroy(): void {
    if(this._foundFilmSubscription){
      this._foundFilmSubscription.unsubscribe();
    }
  }

  public onDetails(): void {
    this._dashboardService.setFilmDetails(this.foundFilm);
    this._router.navigate(['../details'], { relativeTo: this._activatedRoute });
  }

  public addToFavorites(): void {
    if(this._dashboardService.addToFavorites()){
      alert("Film: \"" + this._dashboardService.getFilm()['Title'] + "\" was Added to Favorites!");
    } else {
      alert("Film: \"" + this._dashboardService.getFilm()['Title'] + "\" Already exists !");
    }
  }

  public submitTitleForm(form: NgForm): void {
    if( form.valid ){

      console.log("Before: " + form.value['t']);


      form.value['t'] = form.value['t'].replace(/^(\s)+|[^a-zA-Z\d\s!:-]/g, '');

      console.log("After: " + form.value['t']);

      if (form.value['t'] === '') {
        this.correctTitleFiledValue = false;
        return;
      }

      this._foundFilmSubscription = this._dashboardService.getFilmByTitle( form.value['t'], form.value['y']).subscribe(
        (film) => {
          this.foundFilm = film;
          this._dashboardService.setFilm(film);
        }
      )
    }
  }

  public submitIdForm(form: NgForm): void {
    if( form.valid ){

      if (!this.testOMDbIdFormat(form.value['i'])) {
        this.correctIdFiledValue = false;
        return;
      }

      this._foundFilmSubscription = this._dashboardService.getFilmById( form.value['i']).subscribe(
        (film) => {
          this.foundFilm = film;
          this._dashboardService.setFilm(film);
        }
      )
    }
  }

  public testOMDbIdFormat(id: string): boolean {
    return /^(tt)[\d]+/.test(id);
  }

  public onReset(form: NgForm): void {
    form.reset();
  }
}
