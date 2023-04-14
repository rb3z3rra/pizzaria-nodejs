const sacolaService = require("../service/sacola.service");

const createSacolaControler = async (req, res) => {
  try {
    const corpo = {
      ...req.body,
      userId: req.userId
    }
    return res.status(201).send(await sacolaService.createSacolaService(corpo));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const findByIdSacolaController = async (req, res) => {
  try {
    return res.status(200).send(await sacolaService.findByIdSacolaService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const findAllSacolaController = async (req, res) => {
  try {
    return res.status(200).send(await sacolaService.findAllSacolaService());
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const updateSacolaController = async (req, res) => {
  try {
    return res.status(202).send(await sacolaService.updateSacolaService(req.params.id, req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteSacolaController = async (req, res) => {
  try {
    return res.status(200).send(await sacolaService.deleteSacolaService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

module.exports ={
    createSacolaControler,
    findByIdSacolaController,
    findAllSacolaController,
    updateSacolaController,
    deleteSacolaController
}