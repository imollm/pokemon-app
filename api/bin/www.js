require('dotenv-flow').config()
const app = require('../app')
const port = process.env.PORT || 3000

const { ApolloServer } = require('apollo-server-express')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadFilesSync } = require('@graphql-tools/load-files')

const typesArray = loadFilesSync(`${process.cwd()}/**/*.graphql`)
const resolversArray = loadFilesSync(`${process.cwd()}**/resolvers.js`)

// GRAPHQL
async function startApolloServer() {
  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
  })

  const server = new ApolloServer({ schema })

  await server.start()
  server.applyMiddleware({ app, path: '/graphql' })

  app.listen(port)
  console.log(`Server is running on port ${ port }`)
}

startApolloServer();
