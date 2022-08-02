
const express = require("express")
const cors = require("cors")
const fs = require("fs")

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


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

