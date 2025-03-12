const express = require('express');
const server = express();
const path = require('path')
require('dotenv').config();

const PORT = process.env.PORT;

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.get("/", (req, res) =>{
    res.render('index', { titulo: 'Página inicial', mensagem: 'Olá'});
});

server.get("/home", (req, res) =>{
    res.send("<h2>Bem vindo a página home da minha aplicação</h2>")
});

server.get("/sobre", (req, res) =>{
    res.send("<h2>Somos uma aplicação simples de nodejs</h2>")
});

server.listen(PORT, (req, res) => {
    console.log("Servidor escutando...");
});