import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { Routes, RouterModule } from '@angular/router';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonsRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent },
  { path: 'pokemon/:id', component: DetailPokemonComponent },
  { path: 'pokemon/edit/:id', component: EditPokemonComponent }


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonsRoutingModule { }
