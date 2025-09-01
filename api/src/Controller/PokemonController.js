import { PokemonsModel } from "../Models/PokemonsModel.js";
import pokemonType from "../Enum/PokemonsTypes.js";
import dotenv from "dotenv";
dotenv.config();
class PokemonController {
   
    static async GetCityPokemon(req, res){
        try{
            const { name } = req.params;
            const apiKey = process.env.API_KEY_openweather;
            const responseCity = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric&lang=pt_br`);
            const dataCity = await responseCity.json();
            const temperature = dataCity.main.temp;
       
      // Pega condição climática (ex: "Rain", "Clouds", "Clear")
      const weatherCondition = dataCity.weather[0].main.toLowerCase();

      let typeToFetch;

      
      if (weatherCondition.includes("rain")) {
        typeToFetch = pokemonType.ELECTRIC;
      } 
     
      else if (temperature < 5) {
        typeToFetch = pokemonType.ICE;
      } else if (temperature >= 5 && temperature < 10) {
        typeToFetch = pokemonType.WATER;
      } else if (temperature >= 12 && temperature <= 15) {
        typeToFetch = pokemonType.GRASS;
      } else if (temperature > 15 && temperature <= 21) {
        typeToFetch = pokemonType.GROUND;
      } else if (temperature >= 23 && temperature <= 27) {
        typeToFetch = pokemonType.BUG;
      } else if (temperature >= 27 && temperature <= 33) {
        typeToFetch = pokemonType.ROCK;
      } else if (temperature > 33) {
        typeToFetch = pokemonType.FIRE;
      } else {
        typeToFetch = pokemonType.NORMAL;
      }

      // Buscar pokémons do tipo escolhido
      const response = await fetch(`https://pokeapi.co/api/v2/type/${typeToFetch}`);
      const dataPokemon = await response.json();

      // Nome + imagem
      const pokeList = await Promise.all(
        dataPokemon.pokemon.slice(0, 10).map(async (poke) => {
          const pokeDetails = await fetch(poke.pokemon.url);
          const pokeData = await pokeDetails.json();
          return {
            name: poke.pokemon.name,
            image: pokeData.sprites.front_default
          };
        })
      );

      res.json({
        city: dataCity.name,
        temperature,
        weather: weatherCondition,
        type: typeToFetch,
        pokemons: pokeList
      });

        }catch(error){
            res.status(500).json({ message: "Erro ao buscar Pokémon na cidade", error: error.message });
        }
    }
}

export default PokemonController;