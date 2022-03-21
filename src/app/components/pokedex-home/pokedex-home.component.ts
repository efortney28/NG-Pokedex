import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { InitialAPIResponse } from 'src/app/interfaces';
import { InitialResults } from 'src/app/interfaces';

@Component({
  selector: 'app-pokedex-home',
  templateUrl: './pokedex-home.component.html',
  styleUrls: ['./pokedex-home.component.css']
})
export class PokedexHomeComponent implements OnInit {

  pokemon: InitialResults[] | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFirstTwentyPokemon().subscribe((res) => {
      console.log(res.results);
      this.pokemon = res.results;
    });
  }

}
