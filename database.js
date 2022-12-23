const {ObjectId} = require('bson')

var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://0.0.0.0:27017'

async function viewAllChampions() {
    let client = await MongoClient.connect(url)
    let db = client.db("GCH1003")
    const results = await db.collection("champions").find().toArray()
    return results
}

async function insertNewChampion(newChampion) {
    let client = await MongoClient.connect(url)
    let db = client.db("GCH1003")
    let newId = await db.collection("champions").insertOne(newChampion)
    return newId
}

async function deleteChampion(id) {
    let client = await MongoClient.connect(url)
    let db = client.db("GCH1003")
    await db.collection("champions").deleteOne({ _id: ObjectId(id) })
}

module.exports = { insertNewChampion, viewAllChampions, deleteChampion }