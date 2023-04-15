const Ingrediente = require("../model/Ingrediente");

const createIngredienteService = (body) => {
  return Ingrediente.create(body);
};
const findByIdIngredienteService = (id) => {
  return Ingrediente.findById(id);
};
const findAllIngredienteService = (limit, offset) => {
  return Ingrediente.find().limit(limit).skip(offset);
};
const updateIngredienteService = (id, body) => {
  return Ingrediente.findByIdAndUpdate(id, body, { returnDocument: "after" });
};
const deleteIngredienteService = (id) => {
  return Ingrediente.findByIdAndRemove(id);
};

module.exports = {
  createIngredienteService,
  findByIdIngredienteService,
  findAllIngredienteService,
  updateIngredienteService,
  deleteIngredienteService,
};
