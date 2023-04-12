const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database");


connectToDatabase();

const usuario = require("./src/router/usuario.router");
const auth = require("./src/router/auth.router");
const pizza = require("./src/router/pizza.router");
const ingrediente = require("./src/router/ingrediente.router");
const categoria = require("./src/router/categoria.router");

const app = express();

const porta = 3000;


app.use(express.json());

app.use("/usuario", usuario); // Chama as rotas de usuario
app.use("/auth", auth); // Chamando as rotas de auth
app.use("/pizza", pizza); // Chama as rotas de pizza
app.use("/ingrediente", ingrediente); // Chama as rotas para ingrediente
app.use("/categoria", categoria); // Chama as rotas para categoria de pizza

app.listen(porta, () => {
  console.log(` Servidor rodando em: http://localhost:${porta}`);
});

app.get("/", (req,res) => {
    res.send("Mamma Mia!!!");
});