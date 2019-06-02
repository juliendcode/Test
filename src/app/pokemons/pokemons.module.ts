import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsService } from './pokemons.service';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    EditPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    FormsModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PokemonsService
  ]
})
export class PokemonsModule { }
