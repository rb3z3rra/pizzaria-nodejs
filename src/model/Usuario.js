const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
      CEP: { type: String, required: true },
      createdAt: { type: Date, required: true, default: Date.now() }, // Armazena a data de criação dos ende... para futuras auditorias
    },
  ],
  pizzas_fav: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        ref: "pizzas",
      },
      createdAt: { type: Date, default: Date.now() },
    },
  ],
  createdAt: { type: Date, default: Date.now() },
  admin: { type: Boolean, required: true, default: false }, //false será valor padrão
});

//midleware  a ser executado antes de "salvar"
usuarioSchema.pre("save", async function (next) {
  if (this.senha) {
    this.senha = await bcrypt.hash(this.senha, 10); //10 é a quantidade de saltos(quantidade de x embaralhada)
    next();
  }
});

//midleware  a ser executado antes de "atualizar" os dados
usuarioSchema.pre("findOneAndUpdate", async function (next) {
  if (this._update.senha) {
    this._update.senha = await bcrypt.hash(this._update.senha, 10);
  }
});

const Usuario = mongoose.model("usuarios", usuarioSchema);

module.exports = Usuario;
