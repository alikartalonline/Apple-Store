const express = require("express")
const cors = require("cors")
const fs = require("fs")
const { readFileAsync } = require("./utils")

const PORT = 3334

const server = express()
server.use(cors())

server.use(express.static('assets'))


server.get("/", (req, res) => {
    res.send("Apple Products Api")
}) 

server.get("/api/products", (req, res) => {
    fs.readFile('db/products.json', function(err,data){
        res.send(JSON.parse(data))
    })
}) 

server.get("/api/product/:id", async (req, res) => {
    const id = parseInt(req.params["id"] || "0")
    const items = await readFileAsync('db/products.json')
    const item = items.find(x => x.id === id)
    res.send(item)
  })


server.get("/api/profileAccounts", (req, res) => {
    fs.readFile('db/profileAccounts.json', function(err,data){
        res.send(JSON.parse(data))
    })
}) 


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

