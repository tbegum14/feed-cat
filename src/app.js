const express = require('express')
const { Cat } = require('./models')
const app = express()


app.use(express.json())

app.post('/cats', async(req, res)=>{
    console.log(req.body)
    const createCat = await Cat.create(req.body)
    res.status(201).json(createCat)
})

app.get('/cats', async(req, res)=>{
    const findCats = await Cat.findAll()

    res.status(200).json(findCats)
})

app.get('/cats/:id', async(req, res)=>{
    const findCat = await Cat.findPk
})

module.exports = app;