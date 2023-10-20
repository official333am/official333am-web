import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EPKComponent } from './epk/epk.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';
import { SongBuilderComponent } from './song-builder/song-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    EPKComponent,
    NavigationBarComponent,
    HomeComponent,
    SongBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
