const { DataTypes } = require('sequelize')
const db = require('../database')

const Product = db.define('Product', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false
    },

    name: {
        type:DataTypes.STRING,
        allowNull:false
    },

    price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull: false
    },

    stock:{
        type:DataTypes.INTEGER,
        defaultValue: 0
    },

    description: {
        type:DataTypes.TEXT
    },

    image: { 
        type:DataTypes.STRING
    }

})

module.exports = Product

