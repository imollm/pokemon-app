import { GetLastPokemonsAPIPayload } from "../models/APIPayloadModels";

const getLastPokemons = async (limit: number): Promise<GetLastPokemonsAPIPayload> => {
    const response = await fetch(`http://localhost:8080/api/v1/pokemon/last/${limit}`);
    if (response.status === 200) {
        return await response.json();
    } else {
        return {
            status: 'error',
            pokemons: [],
            message: response.statusText
        };
    }
}

// Get pokemon image
const getPokemonImage = async (pokemonId: string): Promise<any> => {
    const response = await fetch(`http://localhost:8080/api/v1/pokemon/image/${pokemonId}`);
    if (response.status === 200) {
        const imgBlob = await response.blob();
        const imgObjUrl = URL.createObjectURL(imgBlob);
        return imgObjUrl;
    } else {
        return '';
    }
}

export { getLastPokemons, getPokemonImage };
