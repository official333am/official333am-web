import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './containers/artists/artists.component';
import { ArtistCardsComponent } from './components/artist-cards/artist-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
