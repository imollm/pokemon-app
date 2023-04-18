const pokemonModel = require('./model')

module.exports = {
    Query: {
        lastPokemons: async (_, args) => {
            return await pokemonModel.getLastPokemons(args.limit)
        },
        pokemons: async () => {
            return await pokemonModel.getAllPokemons()
        },
        pokemonById: async (_, args) => {
            return await pokemonModel.getPokemonById(args.id)
        },
        searchPokemon: async (_, args) => {
            return await pokemonModel.searchPokemon(args.toSearch)
        }
    },
    Mutation: {
        addNewPokemon: async (_, args) => {
            const pokemon = {
                name: args.name,
                type: args.type,
                HP: args.HP,
                attack: args.attack,
                defense: args.defense,
                SPAttack: args.SPAttack,
                SPDefense: args.SPDefense,
                speed: args.speed,
                image: args.image
            }
            return await pokemonModel.createPokemon(pokemon)
        }
    }
}

