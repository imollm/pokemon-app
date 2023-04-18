'use strict'

// require('dotenv-flow').config()
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let PokemonSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: Array,
    required: true
  },
  HP: {
    type: Number,
    default: 0
  },
  attack: {
    type: Number,
    default: 0
  },
  defense: {
    type: Number,
    default: 0
  },
  SPAttack: {
    type: Number,
    default: 0
  },
  SPDefense: {
    type: Number,
    default: 0
  },
  speed: {
    type: Number,
    default: 0
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model('Pokemon', PokemonSchema)
