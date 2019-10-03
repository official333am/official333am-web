import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './containers/artists/artists.component';
import { ContactUsComponent } from './containers/contact-us/contact-us.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { VideosComponent } from './containers/videos/videos.component';
import { TwitterNetworkingComponent } from './containers/twitter-networking/twitter-networking.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    ContactUsComponent,
    AboutUsComponent,
    VideosComponent,
    TwitterNetworkingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
