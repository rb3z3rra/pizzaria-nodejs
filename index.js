const express = require("express");
require("dotenv").config();
const connectToDatabase = require("./src/database/database");
const cors = require("cors(");


connectToDatabase();

const usuario = require("./src/router/usuario.router");
const auth = require("./src/router/auth.router");
const pizza = require("./src/router/pizza.router");
const ingrediente = require("./src/router/ingrediente.router");
const categoria = require("./src/router/categoria.router");
const sacola = require("./src/router/sacola.router");
const pedido = require("./src/router/pedido.router");
const bebida = require("./src/router/bebida.router");
const docs = require("./src/router/docs.router");

const app = express();

const porta = 3000;


app.use(express.json());
app.use(
  cors({
    // origin: "*" // com * é acessivel de qualquer ip
    origin: "localhost:3001", //acessivel de um app rodando na porta 3001
    // origin: [ "localhost:3001", "localhost:3002"] // acessivel por um array de enderecos
    methods: ["GET", "PUT", "DELETE", "PATCH"], // Lista os métodos permitidos
  })
);

app.use("/usuario", usuario); // Chama as rotas de usuario
app.use("/auth", auth); // Chamando as rotas de auth
app.use("/pizza", pizza); // Chama as rotas de pizza
app.use("/ingrediente", ingrediente); // Chama as rotas para ingrediente
app.use("/categoria", categoria); // Chama as rotas para categoria de pizza
app.use("/sacola", sacola); // Chama as rotas para sacola de compras
app.use("/pedido", pedido); //Chama as rotas para pedidos
app.use("/bebida", bebida); // Chama as rotas para bebida
app.use("/docs", docs); // Chamando as rotas de docs

app.listen(porta, () => {
  console.log(` Servidor rodando em: http://localhost:${porta}`);
});

app.get("/", (req,res) => {
    res.send("Mamma Mia!!!");
});