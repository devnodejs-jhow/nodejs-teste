// Cole o código abaixo 
require('dotenv').config()
const Key_database = process.env.KEYDATABASE
const express = require("express");
const app = express();
const connection = require('./database/database')
const bodyParser = require('body-parser')
const cors = require('cors')
const Pergunta = require('./database/Pergunta')

console.log("valor do dotenv ==>",Key_database); 

// cole o codigo abaixo depois dos requires do banco de dados do connect 	
//11° EstabeleÃ§a uma conexÃ£o 
connection
    .authenticate()
    .then(() => {
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// Configurar configuraÃ§oes de view engine e body-parser
//12° Colocar configuraÃ§oes de view engine ejs e tbm do body-parser
app.use(cors())

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//13° Criar uma rota url simples

app.get("/",(req, res) => {
    let nome = "Jesus Cristo" 
	res.render("index",{
        nome:nome
    });
});

// Montar servidor 
//14° Montar o servidor na porta desejada 

	app.listen(process.env.PORT, err => console.log(err));


