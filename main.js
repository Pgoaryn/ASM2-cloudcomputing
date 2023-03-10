
const {insertNewChampion, viewAllChampions, deleteChampion} = require('./database')
var express = require('express')
var app = express()

app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/view',async (req,res)=>{
    let results = await viewAllChampions()
    res.render('view',{'results':results})
})

app.post('/new',async (req,res)=>{
    let name = req.body.txtName
    let price = req.body.txtPrice
    let picture = req.body.txtPic
    let newChampion = {
        name : name,
        price : Number.parseInt(price),
        pictureURL: picture
    }
    await insertNewChampion(newChampion)
    res.redirect('/view')
})

app.get('/new',(req,res)=>{
    res.render('newChampion')
})

app.get('/delete',async (req,res)=>{
    const id = req.query.id
    await deleteChampion(id)
    res.redirect('/view')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log("Welcome to Summoner's Rift")