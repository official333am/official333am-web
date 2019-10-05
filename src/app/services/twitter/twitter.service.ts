import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {
  serverHost = 'https://official333am-server.firebaseapp.com';

  constructor(
    private http: HttpClient
  ) {
    if (window.location.href.indexOf('localhost')) {
      this.serverHost = 'http://localhost:5000'
    }
  }

  getUsers(json: any) {
    return this.http.post<any>(this.serverHost + '/api/twitter/search', json);
  }

  sendMessage(json: any) {
    var json2 = {
      userid: 3758444059,
      message: 'i like bear too!'
    }
    return this.http.post<any>(this.serverHost + '/api/twitter/direct_message', json2);
  }
}
