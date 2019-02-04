import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { PokemonModel } from 'src/Models/PokemonModel';

@Component({
  selector: 'generation-one',
  templateUrl: './generation-one.component.html',
  styleUrls: ['./generation-one.component.css'],
  host: {
    '[class.content-container]': 'true',
  }
})
export class GenerationOneComponent implements OnInit {

  environment = environment;
  configUrl = 'src/environments.json';
  pokemonApi = '';
  poke: any[] = [];
  pokemon: PokemonModel[] = [];
  constructor(private http: HttpClient) {
    this.pokemonApi = 'http://pokeapi.co/';
  }

  ngOnInit() {
    this.getFirstGeneration();
    console.log(this.pokemon);
  }

  private getFirstGeneration() : Observable<any>[]
  { 
    let generationOneList: any[151] = [];
    let i: number;
    let resp: any;
    for (i = 1; i <= 151; i++)
    {
      this.http.get(this.pokemonApi + 'api/v2/pokemon/' + i)
        .subscribe((response) => 
        {
          this.poke.push(response);
        });
    }
    return this.poke;
  }

}
