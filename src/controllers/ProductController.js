const Product = require('../models/Product')

const ProductController = {
    async testar(req,res){
        return res.send("Controller pronto para gerenciar as frutas")
    },

    async store(req,res){
        const {name, price, stock, description, image} = req.body

        try{
            const newProduct = await Product.create({
                name,price,stock,description,image
            })

            return res.status(201).json(newProduct)
        }
        catch(e){
            console.log(e)
            return res.status(500).json({e: "Erro ao cadastrar produto"})
        }
    },

    async index(req,res){
        try{
            const products = await Product.findAll()
            return res.json(products)
        }catch(e){
            return res.status(500).jsonn({e:"Erro ao buscar as frutas"})
        }
    }
}

module.exports = ProductController