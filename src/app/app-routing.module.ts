import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EPKComponent } from './epk/epk.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: 'epk', component: EPKComponent, data: { state: 'epk' } },
  { path: '**', component: EPKComponent, data: { state: '/' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
