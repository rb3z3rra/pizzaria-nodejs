const mongoose = require("mongoose");

const sacolaSchema = new mongoose.Schema({
  pizzas: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "pizzas",
        required: true,
      },
      quantidade: { type: Number, required: true },
    },
  ],
  precoTotal: { type: Number, required: true },
  frete: { type: Number, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "usuarios",
    required: true,
  },
  createdAt: { type: Date, required: true, default: Date.now() },
});

const Sacola = mongoose.model("sacolas", sacolaSchema);

module.exports = Sacola;