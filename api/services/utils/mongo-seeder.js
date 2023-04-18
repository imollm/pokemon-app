'use strict'

const mongoose = require('mongoose')

module.exports = class MongoSeeder {

  constructor() {
  }

  async populate(collectionName, howMany) {

    let collectionObjects = []
    for (let i = 0; i < howMany; i++) {
      collectionObjects.push({
        id: faker.random.number(),
        name: faker.name.title(),
        type: faker.datatype.array(2),
        HP: faker.random.number(),
        attack: faker.random.number(),
        defense: faker.random.number(),
        SPAttack: faker.random.number(),
        SPDefense: faker.random.number(),
        speed: faker.random.number(),
        image: faker.system.filePath()
      })
    }
    await this.getCollectionByName(collectionName).insertMany(collectionObjects)
  }

  async delete(collectionName) {
    await this.getCollectionByName(collectionName).deleteMany({})
  }

  async populateOne(collectionName) {

    const object = {
      id: faker.random.number(),
      name: faker.name.title(),
      type: faker.datatype.array(2),
      HP: faker.random.number(),
      attack: faker.random.number(),
      defense: faker.random.number(),
      SPAttack: faker.random.number(),
      SPDefense: faker.random.number(),
      speed: faker.random.number(),
      image: faker.system.filePath()
    }

    const result = await this.getCollectionByName(collectionName).insertOne(object)

    return result.insertedId.toString()
  }

  getCollectionByName(collectionName) {
    return mongoose.connection.collection(collectionName)
  }
}