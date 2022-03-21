import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = "Pokédex";
  faSearch = faSearch;
  search: boolean = false;
  searchText!: string;
  @ViewChild("searchText") searchElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSearch(): void {
    this.search = !this.search;
  }

  onSubmit(e: Event): void {
    e.preventDefault();
    console.log('submitted! - ' + this.searchText);
    this.searchText = '';
  }

}
