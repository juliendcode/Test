import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';

@Component({
  selector: 'list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: [ './list-pokemon.component.css' ]
})
export class ListPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;


  constructor (private router: Router) { }


  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon): void {
    console.log('vous avez cliqué sur ' + pokemon.name);
    let link = [ '/pokemon', pokemon.id ];
    this.router.navigate(link);
  }
}
