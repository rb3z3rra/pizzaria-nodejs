const express = require("express");
const connectToDatabase = require("./src/database/database");

const app = express();

const porta = 3000;


app.use(express.json());

connectToDatabase();

app.listen(porta, () => {
  console.log(` Servidor rodando em: http://localhost:${porta}`);
});

app.get("/", (req,res) => {
    res.send("Mamma Mia!!!");
});