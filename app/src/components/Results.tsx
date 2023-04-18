import { useState, useEffect } from 'react'
import { Pokemon } from '../models/Pokemon'

interface Props {
    search: string
    searchAction: boolean
    pokemons: Pokemon[]
}

const Results: React.FC<Props> = (props) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const searchPokemons = () => {
        fetch(`http://localhost:8080/api/v1/pokemon/search/${props.search}`)
            .then(res => res.json())
            .then(data => setPokemons(data.pokemons))
            .finally(() => console.log(pokemons))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log(props.searchAction)
        searchPokemons()
    }, [props.searchAction])

    return (
        <table className='table-auto'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>SP Attack</th>
                    <th>SP Defense</th>
                    <th>Speed</th>
                </tr>
            </thead>
            <tbody>
                {
                    pokemons.map(pokemon => {
                        return (
                            <tr key={pokemon._id}>
                                <td>{pokemon.name}</td>
                                <td>{pokemon.type}</td>
                                <td>{pokemon.HP}</td>
                                <td>{pokemon.attack}</td>
                                <td>{pokemon.defense}</td>
                                <td>{pokemon.SPAttack}</td>
                                <td>{pokemon.SPDefense}</td>
                                <td>{pokemon.speed}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Results;