import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, ObservableInput } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  // le point d’accés à notre API
  private pokemonsUrl = 'api/pokemons';

  constructor (private http: HttpClient) { }

  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }
  getPokemon(id: number): Pokemon {
    let pokemons = this.getPokemons();

    for (let index = 0; index < pokemons.length; index++) {
      if (id === pokemons[ index ].id) {
        return pokemons[ index ];
      }
    }
  }

  /**Put, update pokemon */
  updatePokemon(pokemon: Pokemon): Observable<any> {
    return this.http.put(this.pokemonsUrl, pokemon)

  }


}
