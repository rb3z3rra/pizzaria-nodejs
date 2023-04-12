const CategoriaService = require("../service/categoria.service");

const createCategoriaController = async (req, res) => {
  try {
    return res.status(201).send(await CategoriaService.createCategoriaService(req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const findByIdCategoriaController = async (req, res) => {
  try {
    return res.status(200).send(await CategoriaService.findByIdCategoriaService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const findAllCategoriaController = async (req, res) => {
  try {
    return res.status(200).send(await CategoriaService.findAllCategoriaService());
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const updateCategoriaController = async (req, res) => {
  try {
    return res.status(202).send(await CategoriaService.updateCategoriaService(req.params.id, req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};
const deleteCategoriaController = async (req, res) => {
  try {
    return res.status(200).send(await CategoriaService.deleteCategoriaService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

module.exports = {
  createCategoriaController,
  findByIdCategoriaController,
  findAllCategoriaController,
  updateCategoriaController,
  deleteCategoriaController,
};
