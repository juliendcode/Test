import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title: string = 'Pokémons';
  private pokemons: Pokemon[];
  private value: string = '';
  ngOnInit() {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon: Pokemon) {
    alert('vous avez cliqué sur ' + pokemon.name);
  }
  onClick() {
    console.log('clickkkkk');
  }

  onKey(event: KeyboardEvent) {
    this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
  }
}
