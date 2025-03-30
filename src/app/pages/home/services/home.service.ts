import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppDomainConstant } from '../../../constants/app-domain-constantl';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

    headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      });

  constructor(private httpClient: HttpClient) {}

  getGames() {
    return this.httpClient.get('https://free-to-play-games-database.p.rapidapi.com/api/games',{
        headers: {
		'x-rapidapi-key': 'b9cdc62088msh4bb14cf8d4db7a1p199dd8jsnf0d39a6d32cd',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
  }});
  }

}
