import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokedexHomeComponent } from './components/pokedex-home/pokedex-home.component';

const routes: Routes = [
  { path: '', component: PokedexHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
