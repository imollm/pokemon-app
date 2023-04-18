const { version } = require('../package.json')
const express = require('express')
const pokemon = require('../components/pokemon/routes')

const router = express.Router()

router.get('/health', (req, res) => {
    res.send('ok')
})

router.get('/version', (req, res) => {
    res.send(version)
})

router.get('/', (req, res) => {
    res.send('<h1>Pokemon API v1 by Ivan Moll</h1>')
})

router.use('/pokemon', pokemon)

module.exports = router