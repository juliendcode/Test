import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemons';
import { PokemonsService } from '../pokemons.service';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pokemon-form',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: [ './edit-pokemon.component.css' ]
})
export class EditPokemonComponent implements OnInit {

  @Input() pokemon: Pokemon; // propriété d'entrée du composant

  editPokeForm: FormGroup
  // pokemon: Pokemon = null;

  constructor (
    private pokemonService: PokemonsService,
    private router: Router,
    private route: ActivatedRoute,

    private formBuilder: FormBuilder) {
    this.editPokeForm = this.formBuilder.group({
      name: null,
      cp: null,
      hp: null,

    });
  }


  ngOnInit(): void {
    let id = + this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getPokemon(id);
    this.pokemonService.getPokemon(id);
    this.editPokeForm.get('name').setValue(this.pokemon.name);
    this.editPokeForm.get('cp').setValue(this.pokemon.cp);
    this.editPokeForm.get('hp').setValue(this.pokemon.hp);



  }
  onSubmit(): void {
    console.log("Submit form !");
    let link = [ '/pokemon', this.pokemon.id ];
    this.router.navigate(link);
  }



  goBack(): void {
    let link = [ '/pokemon', this.pokemon.id ];
    this.router.navigate(link);
  }

}