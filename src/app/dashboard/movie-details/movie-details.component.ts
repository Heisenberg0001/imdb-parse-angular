import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private _filmDetails: object;
  canActivateFilmDetail = false;

  constructor( private _dashboardService: DashboardService) { }

  ngOnInit(): void {
    if(this._dashboardService.getFilmDetails()) {
      this._filmDetails = this._dashboardService.getFilmDetails();
      this.canActivateFilmDetail = true;
    }
  }

  get foundFilm() {
    return this._filmDetails;
  }
}
