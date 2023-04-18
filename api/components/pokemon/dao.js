'use strict'

const pokemonCollection = require('./mongoose')
const imageUtils = require('../../services/utils/image-utils')
const fs = require('fs')
const path = require('path')

const pokemonDAO = {

  getLastPokemons: (limit) => {
    return pokemonCollection.find({}).limit(parseInt(limit)).sort('-_id')
  },

  getAllPokemons: () => {
    return pokemonCollection.find({}).sort('-_id')
  },

  createPokemon: (pokemon) => {
    if (pokemon['date'] === null || pokemon['date'] ==='')
      delete pokemon['date']

    return pokemonCollection.create(pokemon)
  },

  getPokemonById: (pokemonId) => {
    return pokemonCollection.findById(pokemonId)
  },

  updatePokemonById: (pokemon) => {
    return pokemonCollection.findOneAndUpdate({ _id: pokemon.id }, pokemon, { new: true })
  },

  deletePokemonById: (pokemonId) => {
    return pokemonCollection.findOneAndDelete({ _id: pokemonId })
  },

  uploadImageByPokemonId: (pokemonId, filePath) => {
    const fileName = imageUtils.getFileName(filePath)
    const imageExtension = imageUtils.getFileExtension(fileName)

    if (!imageUtils.checkIfHaveValidImageExtension(imageExtension)) {
      fs.unlink(filePath, () => { })
      throw new Error('Unsupported Media Type')
    }

    return pokemonCollection.findByIdAndUpdate(pokemonId, { image: fileName }, { new: true })
  },

  getImageByPokemonId: async (pokemonId) => {
    const pokemon = await pokemonCollection.findById(pokemonId)
    const pathFile = `./upload/pokemon/${pokemon.image}`
    const statsFile = fs.statSync(pathFile)

    if (typeof statsFile === 'object')
      return path.resolve(pathFile)

    throw new Error('Image not found')
  },

  searchPokemon: (toSearch) => {
    return pokemonCollection.find({ '$or': [
      { 'name': { '$regex': toSearch, '$options': 'i' } },
      { 'type': { '$regex': toSearch, '$options': 'i' } }
    ] })
      .sort([['name', 'ascending']])
  }
}

module.exports = pokemonDAO
