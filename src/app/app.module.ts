import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comoponents/home/home.component';
import { SearchComponent } from './comoponents/search/search.component';
import { ArtistComponent } from './comoponents/artist/artist.component';
import { NavbarComponent } from './comoponents/shared/navbar/navbar.component';
import { ROUTES } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
