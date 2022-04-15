import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { InitialResults, PokemonTypeDetail } from 'src/app/interfaces';
import { PokemonDetails } from 'src/app/interfaces';
import { PokemonType } from 'src/app/interfaces';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() initialInfo: InitialResults = {"name": "", "url": ""};
  pokeDetails: PokemonDetails | undefined;
  types: PokemonType[] | undefined;
  moreInfo: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if(this.initialInfo) {
      this.apiService.getPokemonDetails(this.initialInfo.url).subscribe((res) => {
        this.pokeDetails = res;
        this.types = res.types;
      });
    }
    console.log(this.pokeDetails)
  }

  handleClick(): void {
    this.moreInfo = !this.moreInfo;
  }


}
