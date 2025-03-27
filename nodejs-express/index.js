// Importando o pacote do Express.js
const express = require("express")
// Carregando o método principaldo Express
const app = express() // Iniciando o Express

// Configurando a View Engine - EJS
app.set('view engine', 'ejs')

// Criando a rota principal (raiz) do site
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisição
// RES -> Trata a resposta
app.get("/", (req, res) => {
    res.send("<h1>Bem vindo ao meu primeiro site em Node.js!</h1><br><p>Iniciando estudos com Noje.js!</p>");
});

// Rota de perfil
// :nome -> parâmetro obrigatório
// :nome? -> parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
     // res.send("<h1>Perfil do usuário</h1>");
    // Coletando o parâmetro da rota e gravando na variável
    const nome = req.params.nome
    if (nome) {
     res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
    } else {
        res.send(`<h2>Faça Login para acessar o seu perfil!</h2>`);
    }

 
});

// Rota de produtos
app.get("/produtos", (req, res) => {
    res.render("produtos");
})

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8081, (error) =>{
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor!" + error);
    }else {
        console.log("Servidor iniciado com sucesso");
    };
});