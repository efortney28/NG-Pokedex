// pokeapi response
export interface InitialAPIResponse {
    count: number;
    next?: string;
    previous?: string;
    results?: InitialResults[];
}

// pokeapi results
export interface InitialResults {
    name: string;
    url: string;
}

// pokemon details
export interface PokemonDetails {
    abilities: any[];
    base_experience: number;
    forms: any[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: any[];
    name: string;
    order: number;
    past_types: any[];
    species: InitialResults;
    sprites: Sprite;
    stats: any[];
    types: PokemonType[];
    weight: number;
}

// pokemon sprite
export interface Sprite {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}

// pokemon types 
export interface PokemonType {
    slot?: number;
    type?: PokemonTypeDetail;
}

// pokemon type details
export interface PokemonTypeDetail {
    name: string;
    url: string;
}