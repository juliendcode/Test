import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PokemonsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
