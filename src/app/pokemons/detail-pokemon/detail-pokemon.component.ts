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
    private pokemonsService: PokemonsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonsService.getPokemon(id);
  }

  goBack(): void {
    this.router.navigate([ '/pokemons' ])
  }

  goEdit(pokemon: Pokemon): void {
    this.router.navigate([ '/pokemon/edit', pokemon.id ])
  }

}


