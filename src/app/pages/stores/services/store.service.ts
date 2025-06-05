import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameDetail, StoreDetail, StoreListResponse } from 'src/app/models/rawg.interfaces';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly apiKey = 'c13d9de91ed24b13abd23ec72a84ddbe';
  private readonly baseUrl = 'https://api.rawg.io/api';
  private readonly gameDetailsUrl = 'https://rawg-video-games-database.p.rapidapi.com';
  private readonly rapidHeaders = {
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
    'x-rapidapi-key': '45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0'
  };

  constructor(private http: HttpClient) { }

  getStores(): Observable<StoreListResponse> {
    return this.http.get<StoreListResponse>(`${this.baseUrl}/stores?key=${this.apiKey}`);
  }

  getStoreById(id: string): Observable<StoreDetail> {
    return this.http.get<StoreDetail>(`${this.baseUrl}/stores/${id}?key=${this.apiKey}`);
  }

  getGameById(id: number): Observable<GameDetail> {
    return this.http.get<GameDetail>(
      `${this.gameDetailsUrl}/games/${id}?key=${this.apiKey}`,
      { headers: this.rapidHeaders }
    );
  }
}