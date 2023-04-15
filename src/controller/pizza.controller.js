const pizzaService = require("../service/pizza.service");

const findByIdPizzaController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(await pizzaService.findByIdPizzaService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const findAllPizzaController = async (req, res) => {
  try {
    return res.status(200).send(await pizzaService.findAllPizzaService(req.query.limit, req.query.offset));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const createPizzaController = async (req, res) => {
  try {
    return res
      .status(201)
      .send(await pizzaService.createPizzaService(req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const updatePizzaController = async (req, res) => {
  try {
    return res
      .status(202)
      .send(await pizzaService.updatePizzaService(req.params.id, req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deletePizzaController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(await pizzaService.deletePizzaService(req.params.id));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const addIngredientePizzaController = async (req, res) => {
  try {
    return res
      .status(201)
      .send(
        await pizzaService.addIngredientePizzaService(req.params.id, req.body)
      );
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteIngredientePizzaController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(
        await pizzaService.deleteIngredientePizzaService(
          req.params.id,
          req.body
        )
      );
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const addCategoriaPizzaController = async (req, res) => {
  try {
    return res
      .status(201)
      .send(
        await pizzaService.addCategoriaPizzaService(req.params.id, req.body)
      );
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteCategoriaPizzaController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(
        await pizzaService.deleteCategoriaPizzaService(req.params.id, req.body)
      );
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

module.exports = {
  findByIdPizzaController,
  findAllPizzaController,
  createPizzaController,
  updatePizzaController,
  deletePizzaController,
  addIngredientePizzaController,
  deleteIngredientePizzaController,
  addCategoriaPizzaController,
  deleteCategoriaPizzaController,
};
