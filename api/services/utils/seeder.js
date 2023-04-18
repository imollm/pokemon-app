'use strict'

const mongoose = require('mongoose')
const MongoDB = require('../mongoDb')
const pokedex = require('../../pokedex.json')

async function seedDB() {
    const mongodb = new MongoDB()
    await mongodb.connect()
    
    await seedPokemons()
    await seedTrainers()

    await mongodb.disconnect()
}

function getCollectionByName(collectionName) {
    return mongoose.connection.collection(collectionName)
}

async function seedPokemons() {
    const collectionObjects = pokedex.pokemons.map(pokemon => {
        return {
            name: pokemon.name,
            type: pokemon.type,
            HP: pokemon.HP,
            attack: pokemon.attack,
            defense: pokemon.defense,
            SPAttack: pokemon.SPAttack,
            SPDefense: pokemon.SPDefense,
            speed: pokemon.speed,
            image: pokemon.image
        }
    })

    await getCollectionByName('pokemons').insertMany(collectionObjects)
}

async function seedTrainers() {
    const collectionObjects = pokedex.trainers.map(trainer => {
        return {
            name: trainer.name,
            age: trainer.age,
            pokemons: trainer.pokemons.map(pokemon => {
                return {
                    name: pokemon.name,
                    type: pokemon.type
                }
            })
        }
    })

    await getCollectionByName('trainers').insertMany(collectionObjects)
}

module.exports = {
    seedDB
}