'use strict'

const mongoose = require('mongoose');

// Create a Schema
const trainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    pokemons: { type: Array, required: false },
});

// Create a Model from the Schema
const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;