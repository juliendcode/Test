import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: [ './pokemon-form.component.css' ]
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon; // propriété d'entrée du composant
  types: Array<string>; // types disponibles pour un pokémon : 'Eau', 'Feu', etc ...

  constructor (
    private pokemonsService: PokemonsService,
    private router: Router) { }

  ngOnInit() {
    // Initialisation de la propriété types
  }


  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    console.log("Submit form !");
    let link = [ '/pokemon', this.pokemon.id ];
    this.router.navigate(link);
  }

}