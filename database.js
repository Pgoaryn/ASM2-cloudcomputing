
var MongoClient = require('mongodb').MongoClient
var url = 'mongodb+srv://boconga123:ngduyanh123@cluster0.nruhbeq.mongodb.net/?retryWrites=true&w=majority'



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