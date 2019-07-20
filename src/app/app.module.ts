import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './containers/artists/artists.component';
import { ArtistCardsComponent } from './components/artist-cards/artist-cards.component';
import { ArtistInfoComponent } from './components/artist-info/artist-info.component';
import { ContactUsComponent } from './containers/contact-us/contact-us.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ArtistCarouselComponent } from './components/artist-carousel/artist-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ArtistCardsComponent,
    ArtistInfoComponent,
    ContactUsComponent,
    AboutUsComponent,
    ArtistCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
