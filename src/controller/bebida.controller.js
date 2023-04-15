const bebidaService = require("../service/bebida.service");

const createBebidaController = async (req, res) => {
  try {
    return res
      .status(201)
      .send(await bebidaService.createBebidaService(req.body));
  } catch (error) {
    console.log(`Error: ${error}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const findByIdBebidaController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(await bebidaService.findByIdBebidaService(req.params.id));
  } catch (error) {
    console.log(`Error: ${error}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const findAllBebidaController = async (req, res) => {
  try {
    return res.status(200).send(await bebidaService.findAllBebidaService(req.query.limit, req.query.offset));
  } catch (error) {
    console.log(`Error: ${error}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const updateBebidaController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(await bebidaService.updateBebidaService(req.params.id, req.body));
  } catch (error) {
    console.log(`Error: ${error}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteBebidaController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(await bebidaService.deleteBebidaService(req.params.id));
  } catch (error) {
    console.log(`Error: ${error}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

module.exports = {
  createBebidaController,
  findByIdBebidaController,
  findAllBebidaController,
  updateBebidaController,
  deleteBebidaController,
};
