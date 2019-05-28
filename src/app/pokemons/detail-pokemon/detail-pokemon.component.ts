import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: [ './detail-pokemon.component.css' ]
})
export class DetailPokemonComponent implements OnInit {


  pokemons: Pokemon[] = null;
  pokemon: Pokemon = null;

  constructor (
    private route: ActivatedRoute,
    private pokemonService: PokemonsService,
    private router: Router
  ) { }

  ngOnInit(): void {

    // this.pokemons = POKEMONS;

    let id = + this.route.snapshot.paramMap.get('id');

    // for (let i = 0; i < this.pokemons.length; i++) {
    //   if (this.pokemons[ i ].id == id) {
    //     this.pokemon = this.pokemons[ i ];
    //   }

    this.pokemon = this.pokemonService.getPokemon(id);


  }

  goBack(): void {
    this.router.navigate([ '/pokemons' ])
  }
  
}


