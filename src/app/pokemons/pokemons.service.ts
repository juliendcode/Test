import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  // le point d’accés à notre API
  private pokemonsUrl = 'api/pokemons';

  constructor (private http: HttpClient) { }

  getPokemons(): Pokemon[] {
    return POKEMONS;
  }
  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[ index ].id) {
        return pokemons[ index ];
      }
    }
  }


}
