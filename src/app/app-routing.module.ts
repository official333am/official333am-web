import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EPKComponent } from './epk/epk.component';
import { HomeComponent } from './home/home.component';
import { SongBuilderComponent } from './song-builder/song-builder.component'

const routes: Routes = [
  // { path: 'epk', component: EPKComponent, data: { state: 'epk' } },
  { path: 'song-builder', component: SongBuilderComponent, data: { state: 'song-builder' } },
  { path: '**', component: EPKComponent, data: { state: '/' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
