const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({
  nome: { type: String, unique: true, required: true },
  descricao: { type: String, required: true },
  tamanho: { type: String, required: true },
  preco_unitario: { type: Number, required: true },
  imagem: { type: String, require: true },
  // ingrediente: [
  //   {
  //     _id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       required: true,
  //       ref: "ingrediente",
  //     },
  //     createdAt: { type: Date, required: true, default: Date.now() },
  //   },
  // ],
  // categoria: [
  //   {
  //     _id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       required: true,
  //       ref: "categoria",
  //     },
  //     createdAt: { type: Date, required: true, default: Date.now() },
  //   },
  // ],
  createdAt: { type: Date, required: true, default: Date.now() },
});

const Pizza = mongoose.model("pizzas", PizzaSchema);

module.exports = Pizza;