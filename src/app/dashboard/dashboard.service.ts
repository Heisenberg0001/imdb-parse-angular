import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  private _foundFilm: Movie;
  private _filmDetails: Movie;
  private _favoriteFilms: Movie[] =
    [{
      "Title":"Interstellar",
      "Year":"2014",
      "Rated":"PG-13",
      "Released":"07 Nov 2014",
      "Runtime":"169 min",
      "Genre":"Adventure, Drama, Sci-Fi",
      "Director":"Christopher Nolan",
      "Writer":"Jonathan Nolan, Christopher Nolan",
      "Actors":"Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot":"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language":"English",
      "Country":"USA, UK, Canada","Awards":"Won 1 Oscar. Another 43 wins & 148 nominations.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      "Ratings":[
        {"Source":"Internet Movie Database","Value":"8.6/10"},
        {"Source":"Rotten Tomatoes","Value":"72%"},
        {"Source":"Metacritic","Value":"74/100"}],
      "Metascore":"74",
      "imdbRating":"8.6",
      "imdbVotes":"1,486,802",
      "imdbID":"tt0816692",
      "Type":"movie",
      "DVD":"N/A",
      "BoxOffice":"N/A",
      "Production":"Syncopy, Lynda Obst Productions",
      "Website":"N/A",
      "Response":"True"},
     {"Title":"3:10 to Yuma",
      "Year":"2007",
      "Rated":"R",
      "Released":"07 Sep 2007",
      "Runtime":"122 min",
      "Genre":"Action, Crime, Drama, Western",
      "Director":"James Mangold",
      "Writer":"Halsted Welles (screenplay), Michael Brandt (screenplay), Derek Haas (screenplay), Elmore Leonard (short story)",
      "Actors":"Russell Crowe, Christian Bale, Logan Lerman, Dallas Roberts","Plot":"A small-time rancher agrees to hold a captured outlaw who's awaiting a train to go to court in Yuma. A battle of wills ensues as the outlaw tries to psych out the rancher.","Language":"English, Chinese",
      "Country":"USA","Awards":"Nominated for 2 Oscars. Another 3 wins & 30 nominations.",
      "Poster":"https://m.media-amazon.com/images/M/MV5BODE0NTcxNTQzNF5BMl5BanBnXkFtZTcwMzczOTIzMw@@._V1_SX300.jpg",
      "Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},
        {"Source":"Rotten Tomatoes","Value":"89%"},
        {"Source":"Metacritic","Value":"76/100"}],
      "Metascore":"76",
      "imdbRating":"7.7",
      "imdbVotes":"287,019",
      "imdbID":"tt0381849",
      "Type":"movie",
      "DVD":"N/A","BoxOffice":"$53,606,916",
      "Production":"Lionsgate Films",
      "Website":"N/A",
      "Response":"True"}];

  constructor( private _http: HttpClient) {}

  public getFilm(): Movie {
    return this._foundFilm;
  }

  public setFilm( film: Movie ): void {
    this._foundFilm = film;
  }

  public getFilmDetails(): Movie {
    return this._filmDetails;
  }

  public setFilmDetails ( film: Movie ): void {
    this._filmDetails = film;
  }

  //favorite movies functionality
  public addToFavorites(): boolean {
    if(this.compareObjects(this.getFilm())){
      return false;
    }
    this._favoriteFilms.push(this.getFilm());
    return true;
  }

  public compareObjects( firstObj: Movie ): boolean {
    for( let i = 0; i < this._favoriteFilms.length; i++) {
      if(firstObj['Title'] === this._favoriteFilms[i]['Title']) {
        return true;
        break;
      }
    }
    return false;
  }

  public onGetFavoriteFilms(): Movie[] {
    return [...this._favoriteFilms];
  }

  public onDeleteFavoriteFilm( index: number ): void {
    this._favoriteFilms.splice(index,1);
  }

  //movie detail functionality
  public passToDetails( film: Movie ): void {
    this._filmDetails = film;
  }

  //top movies functionality
  public getFilmByTitle( title: string, year: string = ''): Observable<Movie> {
    return this._http.get<Movie>(`http://www.omdbapi.com/?t=${title}&y=${year}&apikey=a62f4958`);
  }

  public getFilmById( id: string ): Observable<Movie> {
    return this._http.get<Movie>(`http://www.omdbapi.com/?i=${id}&apikey=a62f4958`);
  }
}
