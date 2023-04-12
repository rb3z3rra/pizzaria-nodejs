const Ingrediente = require("../model/Ingrediente");

const createIngredienteService = (body) => {
  return Ingrediente.create(body);
};
const findByIdIngredienteService = (id) => {
  return Ingrediente.findById(id);
};
const findAllIngredienteService = () => {
  return Ingrediente.find();
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
