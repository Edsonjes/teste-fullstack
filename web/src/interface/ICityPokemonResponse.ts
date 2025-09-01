export interface CityPokemonResponse {
  city: string;
  temperature: number;
  weather: string;
  type: string;
  pokemons: pokemon[];
}

type pokemon = {
  name: string;
  image: string;
}
