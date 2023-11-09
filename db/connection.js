const { Sequelize } = require('sequelize');

const db = new Sequelize('jsnode', 'root', '123456',{
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
})


module.exports = db;