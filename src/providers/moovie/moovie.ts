import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatesMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular' + this.getApiKey());
  }

  getApiKey(): string {
    return '?api_key=b36fbe69a537688f86898c55c572c90d';
  }

}
