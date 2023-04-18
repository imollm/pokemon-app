import React, { useState, useEffect } from 'react';
import { Pokemon } from '../models/Pokemon';
import { getPokemonImage } from '../services/pokemon.get';
import { helpers } from '../helpers/helpers';

export interface Props {
    pokemon: Pokemon;
}

const Card: React.FC<Props> = (props) => {
    const { _id, name, type, attack, defense, SPAttack, SPDefense, speed } = props.pokemon
    let [pokemonImg, setPokemonImg] = useState<string>()

    useEffect(() => {
        getPokemonImage(_id).then(img => {
            setPokemonImg(img)
        })
    }, [])

    return (
        <div className='card bg-gradient-to-t from-indigo-500 p-4 mb-4 border-2 border-white'>
            <figure className='flex flex-col items-center justify-center'>
                <img className='w-60 h-60' src={pokemonImg} alt={name} />
                <figcaption className='text-white my-4'>
                    <h2 className='text-2xl font-bold'>{name}</h2>
                </figcaption>
            </figure>
            <section>
                <ul>
                    <li className='attr'>ID: <span className='attr-val'>{_id}</span></li>
                    <li className='attr flex flex-row justify-start'>Types:
                        {
                            type.map((t: string, index: number) => {
                                return (
                                    <div key={index} className='text-sm ml-2'>
                                        <span className='attrattr-val'>{helpers.typeEmoji(t)}</span>
                                    </div>
                                )
                            })
                        }
                    </li>
                    <li className='attr'>Attack:
                        <span className='attr-val'> {attack}</span>
                    </li>
                    <li className='attr'>Defense:
                        <span className='attr-val'> {defense}</span>
                    </li>
                    <li className='attr'>SP Attack:
                        <span className='attr-val'> {SPAttack}</span>
                    </li>
                    <li className='attr'>SP Defense:
                        <span className='attr-val'> {SPDefense}</span>
                    </li>
                    <li className='attr'>Speed:
                        <span className='attr-val'> {speed}</span>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Card;
