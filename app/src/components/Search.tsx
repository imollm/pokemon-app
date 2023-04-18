import React, { useEffect, useState } from 'react'
import { Pokemon } from '../models/Pokemon'
import Form from './Form'
import Results from './Results'

const Search: React.FC = () => {
    const [search, setSearch] = useState<string>('')
    const [searchAction, setSearchAction] = useState<boolean>(false)
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/pokemon/last/10`)
            .then(res => res.json())
            .then(data => setPokemons(data.pokemons))
            .finally(() => console.log(pokemons))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Form sendSearchKeyword={setSearch} searchAction={setSearchAction} />
            <Results search={search} searchAction={searchAction} pokemons={pokemons} />
        </>
    )
}

export default Search;