import { Pokemon } from "./Pokemon";

export interface GetLastPokemonsAPIPayload {
    status: string;
    pokemons: Array<Pokemon>;
    message: string;
}