import { useState, useEffect } from 'react';
import { Pokemon } from '../models/Pokemon';
import { getLastPokemons } from '../services/pokemon.get';
import Card from './Card';

const Home: React.FC = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        getLastPokemons(9).then(response => {
            setPokemons(response.pokemons)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <h1 className='text-white text-2xl font-bold py-5 text-center'>
                Last Pokemons
            </h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5 gap-x-10 mt-4'>
                <>
                    {
                        pokemons.map(pokemon => {
                            const pokemonId = pokemon._id
                            return (
                                <Card key={pokemonId} pokemon={pokemon} />
                            )
                        })
                    }
                </>
            </div>
        </>
    );
}

export default Home;