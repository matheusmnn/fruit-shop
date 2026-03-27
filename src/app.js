const express = require('express')

const db = require('./database')
const Product = require('./models/Product.js')
const app = express()

db.sync({ force: false })
    .then(() => {
        console.log(`Banco conectado e tabelas criadas`)
    })
    .catch((e) => {
        console.log(`Erro na criação do Banco de Dados`)
    })

const PORT = 3000
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})