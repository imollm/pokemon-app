'use strict'

const PokemonDAO = require('./dao')

module.exports = {

  getLastPokemons: (limit) => {
    return PokemonDAO.getLastPokemons(limit)
  },

  getAllPokemons: () => {
    return PokemonDAO.getAllPokemons()
  },

  createPokemon: (pokemon) => {
    return PokemonDAO.createPokemon(pokemon)
  },

  getPokemonById: (pokemonId) => {
    return PokemonDAO.getPokemonById(pokemonId)
  },

  updatePokemonById: (pokemon) => {
    return PokemonDAO.updatePokemonById(pokemon)
  },

  deletePokemonById: (pokemonId) => {
    return PokemonDAO.deletePokemonById(pokemonId)
  },

  uploadImageByPokemonId: (pokemonId, filePath) => {
    return PokemonDAO.uploadImageByPokemonId(pokemonId, filePath)
  },

  getImageByPokemonId: (pokemonId) => {
    return PokemonDAO.getImageByPokemonId(pokemonId)
  },

  searchPokemon: (toSearch) => {
    return PokemonDAO.searchPokemon(toSearch)
  }
}