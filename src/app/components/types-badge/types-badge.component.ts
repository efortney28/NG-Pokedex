import { Component, Input, OnInit } from '@angular/core';

import { PokemonTypeDetail } from 'src/app/interfaces';

@Component({
  selector: 'app-types-badge',
  templateUrl: './types-badge.component.html',
  styleUrls: ['./types-badge.component.css']
})
export class TypesBadgeComponent implements OnInit {

  @Input() type: PokemonTypeDetail | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
