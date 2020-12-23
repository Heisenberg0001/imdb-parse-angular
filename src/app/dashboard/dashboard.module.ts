import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {FavoriteMoviesComponent} from './favorite-movies/favorite-movies.component';
import {TopMoviesComponent} from './top-movies/top-movies.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopMoviesComponent,
    FavoriteMoviesComponent,
    MovieDetailsComponent,
    DashboardComponent
  ],
  exports: [],
    imports: [DashboardRoutingModule, CommonModule, FormsModule],
  providers: []
})

export class DashboardModule {}
