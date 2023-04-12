const ingredienteService = require("../service/ingrediente.service");

const createIngredienteController = async (req, res) => {
  try {
    return res.status(201).send(await ingredienteService.createIngredienteService(req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const findByIdIngredienteController = async (req, res) => {
  try {
    return res.status(200).send(await ingredienteService.findByIdIngredienteService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const findAllIngredienteController = async (req, res) => {
  try {
    return res.status(200).send(await ingredienteService.findAllIngredienteService());
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const updateIngredienteController = async (req, res) => {
  try {
    return res.status(202).send(await ingredienteService.updateIngredienteService(req.params.id, req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const deleteIngredienteController = async (req, res) => {
  try {
    return res.status(200).send(await ingredienteService.deleteIngredienteService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

module.exports = {
  createIngredienteController,
  findByIdIngredienteController,
  findAllIngredienteController,
  updateIngredienteController,
  deleteIngredienteController,
};
