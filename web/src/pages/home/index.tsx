import './style.css'
import { useEffect, useState } from 'react'
import { getCityPokeon } from '../../services/api'
import type { CityPokemonResponse } from '../../interface/ICityPokemonResponse'

// Tipo usado no front-end
type Pokemon = {
  name: string
  image: string
  type: string
}
type WeatherTemp = {
  weather:string
  temperature:number
}

function Home() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([])
  const [city, setCity] = useState('')
  const [weatherTemp, setWeatherTemp] = useState<WeatherTemp | null>(null);

  // Função que busca pokémons pela cidade
  async function handleSearchCity() {
    if (!city) return

    try {
      const response: CityPokemonResponse = await getCityPokeon(city)

      // Mapeia os pokémons retornados pelo backend e adiciona 'type'
      const pokemonlist: Pokemon[] = response.pokemons.map((p, index) => ({
        name: p.name,
        image:
          p.image ||
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        type: response.type || '???' ,
      }))

      const weatherInfo: WeatherTemp = {
        weather: response.weather,
        temperature: response.temperature
      }

      setWeatherTemp(weatherInfo);


      setPokemon(pokemonlist)
    } catch (error) {
      console.error('Erro ao buscar pokémons:', error)
    }
  }

  // Opcional: carregar uma cidade padrão ao montar o componente
  useEffect(() => {
    setCity('Londres')
    handleSearchCity()
  }, [])

  return (
    <>
      <div className="container">
        <h1>Pokemon Hunters</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSearchCity()
          }}
        >
          <div className="form-row">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Search a City"
            />
            <button type="submit">Go</button>
          </div>
        </form>
      </div>
      <div className='cards-cotainer'>
        <div className='card' key={weatherTemp?.weather}>
          <h2>Weather: {weatherTemp?.weather}</h2>
          <p>Temperature: {weatherTemp?.temperature}°C</p>
        </div>
      </div>
      <div className="cards-container">
        {pokemon.length > 0 ? (
          pokemon.map((poke) => (
            <div className="card" key={poke.name}>
              <h2>{poke.name}</h2>
              <img src={poke.image} alt={poke.name} />
              <p>Type: {poke.type}</p>
            </div>
          ))
        ) : (
          <p>Nenhum Pokémon encontrado.</p>
        )}
      </div>
    </>
  )
}

export default Home
