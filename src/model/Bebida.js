const mongoose = require("mongoose");

const bebidaSchema = new mongoose.Schema({
  nome: { type: String, require: true, unique: true },
  descricao: { type: String, required: true },
  preco_unitario: { type: Number, required: true },
  imagem: { type: String, require: true },
  createdAt: { type: Date, required: true, default: Date.now() },
});

const Bebida = mongoose.model("bebidas", bebidaSchema);

module.exports = Bebida;
