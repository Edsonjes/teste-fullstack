import axios from 'axios';
import type {CityPokemonResponse} from "../interface/ICityPokemonResponse";

const api = axios.create ({
    baseURL: '/api'
})

export const getCityPokeon = async(city:string): Promise<CityPokemonResponse> => {
    const response = await api.get<CityPokemonResponse>(`/GetCityPokemon/${city}`);
    return response.data;
}

export default api; 