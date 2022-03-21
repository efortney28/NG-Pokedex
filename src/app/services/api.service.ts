import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { InitialAPIResponse } from '../interfaces';
import { PokemonDetails } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://pokeapi.co/api/v2/pokemon/'

  constructor(private http: HttpClient) { }

  getFirstTwentyPokemon(): Observable<InitialAPIResponse> {
    return this.http.get<InitialAPIResponse>(this.apiUrl + '?limit=20');
  }

  getPokemonDetails(url: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(url);
  }
}
