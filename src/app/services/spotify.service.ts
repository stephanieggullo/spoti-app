import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': ' Bearer BQDtmDDwTTQ_zWEuTOrkI4IvFI45iUZ4T378zhxTAzOe-xnwFbxy14-kN2MBxU8WCDjizlPXgDVXJIozWX4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
  }


  getArtist( termino: string) {
    const headers = new HttpHeaders({
      'Authorization': ' Bearer BQDtmDDwTTQ_zWEuTOrkI4IvFI45iUZ4T378zhxTAzOe-xnwFbxy14-kN2MBxU8WCDjizlPXgDVXJIozWX4'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
