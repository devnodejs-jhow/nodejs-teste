const Sequelize = require('sequelize');

//Cria uma instÃ¢ncia Sequelize ***(guiaperguntas = nome databela mysql)***

const connection = new Sequelize(process.env.TABLE,process.env.ROOT,process.env.KEYDATABASE,{
    host: process.env.HOST,
    dialect: 'mysql'
});

module.exports = connection;


