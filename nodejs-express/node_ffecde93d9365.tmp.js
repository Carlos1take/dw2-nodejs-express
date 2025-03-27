// Importando o pacote do Express.js
const express = require("express")
// Carregando o método principaldo Express
const app = express() // Iniciando o Express

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8080, function(error){
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    }else {
        console.log("Servidor iniciado com sucesso");
    };
})