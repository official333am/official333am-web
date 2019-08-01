import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './containers/artists/artists.component';
import { ContactUsComponent } from './containers/contact-us/contact-us.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { VideosComponent } from './containers/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ContactUsComponent,
    AboutUsComponent,
    VideosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
