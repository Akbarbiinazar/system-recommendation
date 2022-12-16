import axios from "axios"


export const getFilms = () => {
    return async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    }
}