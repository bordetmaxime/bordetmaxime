const Sequelize = require('sequelize');
const sequelize = require('../database');

class Product extends Sequelize.Model {};

Product.init({

    name: Sequelize.STRING,
    description: Sequelize.STRING,
    price: Sequelize.NUMBER ,
    quantity: Sequelize.STRING,
    picture_name: Sequelize.STRING

},{

    sequelize,
    tableName: "product",
});

module.exports = Product;