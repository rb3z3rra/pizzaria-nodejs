const express = require("express");
const connectToDatabase = require("./src/database/database");

connectToDatabase();

const usuario = require("./src/router/usuario.router");

const app = express();

const porta = 3000;


app.use(express.json());

app.use("/usuario", usuario); // Chama as rotas de usuario


app.listen(porta, () => {
  console.log(` Servidor rodando em: http://localhost:${porta}`);
});

app.get("/", (req,res) => {
    res.send("Mamma Mia!!!");
});