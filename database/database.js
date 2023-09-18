const Sequelize = require('sequelize');

//Cria uma instÃ¢ncia Sequelize ***(guiaperguntas = nome databela mysql)***

const connection = new Sequelize(process.env.TABLE,'root',process.env.KEYDATABASE,{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;


