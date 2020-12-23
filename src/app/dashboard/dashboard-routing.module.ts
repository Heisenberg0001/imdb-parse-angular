import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FavoriteMoviesComponent} from './favorite-movies/favorite-movies.component';
import {TopMoviesComponent} from './top-movies/top-movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';

const routes: Routes = [

  { path: '',  redirectTo: 'top-movies' },
  { path: 'top-movies', component: TopMoviesComponent },
  { path: 'favorites',  component: FavoriteMoviesComponent },
  { path: 'details',    component: MovieDetailsComponent },
  ]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})

export class DashboardRoutingModule {}
