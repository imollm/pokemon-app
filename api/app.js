// require('dotenv-flow').config()
const MongoDB = require('./services/mongoDb')
const express = require('express')
const middlewares = require('./middlewares')

// CONNECT WITH MONGODB
const connect = async () => await new MongoDB().connect()
connect()

// CREATE EXPRESS SERVER
const app = express()

// MIDDLEWARES
middlewares.init(app)

// CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ROUTES
const routes = require('./routes/index')
app.use('/api/v1', routes)

// SEEDER
process.env.SEED_DATABASE
  ? require('./services/utils/seeder').seedDB()
  : null

module.exports = app
