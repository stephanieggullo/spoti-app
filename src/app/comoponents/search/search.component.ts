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
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  searchArtist() {
    if (this.inputSearch === '') {
      this.loading = false;
    } else {
      this.loading = true;
      this.spotifyService.getArtist(this.inputSearch)
        .subscribe((data: any) => {
          console.log(data);
          this.artists = data;
          this.loading = false;
        });
    }
  }

}
