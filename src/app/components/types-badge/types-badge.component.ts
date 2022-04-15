import { Component, Input, OnInit } from '@angular/core';

import { PokemonTypeDetail } from 'src/app/interfaces';

@Component({
  selector: 'app-types-badge',
  templateUrl: './types-badge.component.html',
  styleUrls: ['./types-badge.component.css']
})
export class TypesBadgeComponent implements OnInit {

  @Input() type: PokemonTypeDetail | undefined;
  color: string = '';

  constructor() { }

  ngOnInit(): void {
    if(this.type) {
      this.getBadgeColor(this.type.name);
    }
    console.log("color: " + this.color);
  }

  getBadgeColor(type: string): void {
    switch(type) {
      case "grass": {
        this.color = "#006400";
        break;
      }

      case "poison": {
        this.color = "#9932CC";
        break;
      }

      case "fire": {
        this.color = "#B22222";
        break;
      }

      case "water": {
        this.color = "#00BFFF";
        break;
      }
      
      case "electric": {
        this.color = "#DAA520";
        break;
      }

      case "fighting": {
        this.color = "#A52A2A";
        break;
      }

      case "flying": {
        this.color = "#AFEEEE";
        break;
      }

      case "ground": {
        this.color = "#A0522D";
        break;
      }

      case "rock": {
        this.color = "#908090"
        break;
      }

      case "bug": {
        this.color = "#6B8E23";
        break;
      }

      case "ghost": {
        this.color = "#DA70D6";
        break;
      }

      case "steel": {
        this.color = "#C0C0C0";
        break;
      }

      case "psychic": {
        this.color = "#663399";
        break;
      }

      case "ice": {
        this.color = "#B0E0E6";
        break;
      }

      case "dragon": {
        this.color = "#6A5ACD";
        break;
      }

      case "dark": {
        this.color = "#800080";
        break;
      }

      case "fairy": {
        this.color = "#DDA0DD";
        break;
      }

      case "shadow": {
        this.color = "#708090";
        break;
      }

      default: {
        this.color = "#FFF5EE"
        break;
      }
    }
  }

  getBadgeStyle(): Object {
    return {
      border: '1px solid ' + this.color,
      color: this.color,
      padding: '0.25em 0.5em',
    }
  }

}
