import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artistDetail: any = {};
  loadingArtist: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute, private spotiService: SpotifyService ) {
    this.router.params.subscribe( params => {
      this.getADetail(params['id']);
      this.getATopTrack(params['id']);
    });
   }

  ngOnInit() {
  }

  getADetail( id: string ){
    this.loadingArtist = true;
    this.spotiService.getDetail( id )
      .subscribe( person => {
        this.loadingArtist = false;
        this.artistDetail = person;
      });
  }

  getATopTrack( id: string ){
    this.spotiService.getTopTrack( id )
      .subscribe( tracks => {
        this.topTracks = tracks;
        console.log(tracks);
      });
  }



}
