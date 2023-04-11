const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
  image: { type: String, required: true },
  enderecos: [
    {
      rua: { type: String, required: true },
      numero: { type: Number, required: true },
      complemento: { type: String },
      CEP: {type: String, required: true},
      createdAt: { type: Date, required: true, default: Date.now() }, // Armazena a data de criação dos ende... para futuras auditorias
    },
  ],
  // sabores_fav: [
  //   {
  //     _id: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       unique: true,
  //       ref: "sabores",
  //     },
  //     createdAt: { type: Date, default: Date.now() },
  //   },
  // ],
  createdAt: { type: Date, default: Date.now() },
  admin: { type: Boolean, required: true, default: false}, //false será valor padrão
});


const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;