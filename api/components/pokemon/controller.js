'use strict'

const pokemonModel = require('./model')
const httpError = require('http-errors')
const validator = require('validator')

const controller = {

    test: async (req, res) => {
        return res.json({
            status: 'success',
            message: 'Test endpoint of pokemon'
        })
    },

    last: async (req, res, next) => {
        const limit = req.params.limit

        if (!validator.isInt(limit)) {
            return next(httpError(400, 'Bad Request'))
        }

        try {
            const lastpokemons = await pokemonModel.getLastPokemons(limit)

            return lastpokemons.length <= 0 ?
                next(httpError(404, 'Not Found')) :
                res.json({
                    status: 'success',
                    pokemons: lastpokemons,
                    message: `Last ${limit} pokemons`
                })

        } catch (e) {
            return next(httpError(500, 'Internal Server Error'))
        }
    },

    all: async (req, res, next) => {
        try {
            const allpokemons = await pokemonModel.getAllPokemons()

            return allpokemons.length <= 0 ?
                next(httpError(404, 'Not Found')) :
                res.json({
                    status: 'success',
                    pokemons: allpokemons,
                    message: 'All pokemons on system'
                })
        } catch (e) {
            return next(httpError(500, 'Internal Server Error'))
        }
    },

    save: async (req, res, next) => {
        const pokemon = req.body

        if (validator.isEmpty(pokemon.name) &&
            !Array.isArray(pokemon.type) &&
            pokemon.type.length < 1) {
            return next(httpError(422, 'Unprocessable Entity'))
        }

        try {
            const result = await pokemonModel.createPokemon(pokemon)

            res.status(201).json({
                status: 'success',
                pokemon: result,
                message: 'pokemon saved!'
            })
        } catch (e) {
            return next(httpError(500, 'Internal Server Error'))
        }
    },

    get: async (req, res, next) => {
        const pokemonId = req.params.id

        if (validator.isEmpty(pokemonId)) {
            return next(httpError(400, 'Bad Request'))
        }

        try {
            const result = await pokemonModel.getPokemonById(pokemonId)

            if (!result) {
                return next(httpError(404, 'Not found'))
            }

            return res.json({
                status: 'success',
                pokemon: result,
                message: `pokemon with id ${pokemonId}`
            })
        } catch (e) {
            return next(httpError(404, 'Not found'))
        }
    },

    update: async (req, res, next) => {
        const pokemonId = req.params.id
        const pokemon = req.body

        if (validator.isEmpty(pokemonId)) {
            return next(httpError(400, 'Bad Request'))
        }

        if (validator.isEmpty(pokemon.name) &&
            !Array.isArray(pokemon.type) &&
            pokemon.type.length < 1) {
            return next(httpError(422, 'Unprocessable Entity'))
        }

        try {
            pokemon.id = pokemonId
            const result = await pokemonModel.updatePokemonById(pokemon)

            return res.json({
                status: 'success',
                pokemon: result,
                message: 'pokemon updated'
            })
        } catch (e) {
            return next(httpError(404, 'Not Found'))
        }
    },

    delete: async (req, res, next) => {
        const pokemonId = req.params.id

        try {
            await pokemonModel.deletePokemonById(pokemonId)

            return res.status(204).send()
        } catch (e) {
            return next(httpError(404, 'Not Found'))
        }
    },

    upload: async (req, res, next) => {
        const pokemonId = req.params.id
        let filePath

        if (!req.files || (!pokemonId && !validator.isEmpty(pokemonId))) {
            return next(httpError(400, 'Bad Request'))
        }

        filePath = req.files.file0.path

        try {
            await pokemonModel.uploadImageByPokemonId(pokemonId, filePath)

            return res.status(204).send()
        } catch (e) {
            if (e.message === 'Unsupported Media Type')
                return next(httpError(415, e.message))

            return next(httpError(404, 'Not Found'))
        }
    },

    getImage: async (req, res, next) => {
        const pokemonId = req.params.id

        if (validator.isEmpty(pokemonId)) {
            return next(httpError(400, 'Bad Request'))
        }

        try {
            const image = await pokemonModel.getImageByPokemonId(pokemonId)

            return res.status(200).sendFile(image)
        } catch (e) {
            return next(httpError(404, 'Not Found'))
        }
    },

    search: async (req, res, next) => {
        const toSearch = req.params.search

        try {
            const result = await pokemonModel.searchPokemon(toSearch)

            return res.json({
                status: 'success',
                pokemons: result,
                message: 'All pokemons matching'
            })
        } catch (e) {
            return next(httpError(404, 'Not Found'))
        }
    }
}

module.exports = controller
