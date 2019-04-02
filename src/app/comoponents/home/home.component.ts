import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  msjError: string = '';

  constructor(private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      }, (resError) => {
        this.error = true;
        this.loading = false;
        this.msjError = resError.error.error.message;
      });
  }

  ngOnInit() {
  }

}
