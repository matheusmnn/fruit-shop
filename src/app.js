const express = require('express')
const db = require('./database')
const Product = require('./models/Product')
const routes = require('./routes')
const app = express()

app.use(express.json())
app.use(routes)

db.sync({ force: false })
    .then(() => {
        console.log(`Banco conectado e tabelas criadas`)
    })
    .catch((e) => {
        console.log(`Erro: ${e}`)
    })

const PORT = 3000
app.listen(PORT,() => {
    console.log(`Servidor rodando na porta ${PORT}`)
})