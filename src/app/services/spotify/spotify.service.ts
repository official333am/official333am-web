import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  serverHost = 'https://official333am-server.firebaseapp.com';

  constructor(
    private http: HttpClient
  ) {
    if (window.location.href.indexOf('localhost') !== -1) {
      this.serverHost = 'http://localhost:5000'
    }
  }

  getArtistId(json: any) {
    return this.http.post<any>(this.serverHost + '/api/spotify/artist_id', json);
  }
}