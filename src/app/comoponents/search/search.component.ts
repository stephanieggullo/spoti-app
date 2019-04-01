import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = '';
  artists: any[] = [];

  constructor( private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  searchArtist(){
    console.log(this.inputSearch);
    this.spotifyService.getArtist(this.inputSearch)
      .subscribe((data: any) => {
        console.log(data.artists.items);
        this.artists = data.artists.items;
      });
  }

}
