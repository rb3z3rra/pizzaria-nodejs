const mongoose = require("mongoose");

const ingredienteSchema = {
  nome: { type: String, unique: true, required: true },
  createdAt: { type: Date, required: true, default: Date.now() },
};

const Ingrediente = mongoose.model("ingredientes", ingredienteSchema);

module.exports = Ingrediente;
