import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class SpotifyService {
  constructor(private http: HttpClient) {
  }

  getUrl(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBWbZ3DPiXFenIWLbUcYwPI-Qv_IIwgNyFhjYLian4U04HFV4PnICE5GRq1mivA-ZS9y4YIt3CBKASOxn8'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getUrl('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtist(termino: string) {
    return this.getUrl(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

  getDetail(id: string) {
    return this.getUrl(`artists/${id}`);
  }

  getTopTrack(id: string) {
    return this.getUrl(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => {
        return data['tracks'];
      }));
  }
}
