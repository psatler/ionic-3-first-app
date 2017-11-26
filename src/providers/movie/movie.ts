import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable() //it means that we are going to use this in another page
export class MovieProvider {

  private baseURLPath = "https://api.themoviedb.org/3"
  private apiKey = "your-api-key-here"


  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getApiKey():string {
    return this.apiKey
  }

  getLatestMovies(page = 1){ //1 is a default value in case none is passed by
    return this.http.get(this.baseURLPath + `/movie/popular?page=${page}&api_key=` + this.getApiKey());
  }

  getMovieDetails(movieId){
    return this.http.get(this.baseURLPath + `/movie/${movieId}` + "?api_key=" + this.getApiKey());
  }

}
