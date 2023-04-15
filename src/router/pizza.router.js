const router = require("express").Router();
const pizzaController = require("../controller/pizza.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaPizza,
  validaIdParams,
  valida_IdBody,
} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  pizzaController.findByIdPizzaController
);

router.get(
  "/findAll",
  authMiddleware,
  paginacao,
  pizzaController.findAllPizzaController
);

router.post(
  "/create",
  authMiddleware,
  validaPizza,
  pizzaController.createPizzaController
);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  pizzaController.updatePizzaController
);

router.delete(
  "/deletePizza/:id",
  authMiddleware,
  validaIdParams,
  pizzaController.deletePizzaController
);

router.post(
  "/addIngredientePizza/:id",
  authMiddleware,
  validaIdParams,
  valida_IdBody,
  pizzaController.addIngredientePizzaController
);

router.delete(
  "/deleteIngredientePizza/:id",
  authMiddleware,
  validaIdParams,
  pizzaController.deleteIngredientePizzaController
);

router.post(
  "/addCategoriaPizza/:id",
  authMiddleware,
  validaIdParams,
  valida_IdBody,
  pizzaController.addCategoriaPizzaController
);

router.delete(
  "/deleteCategoriaPizza/:id",
  authMiddleware,
  validaIdParams,
  pizzaController.deleteCategoriaPizzaController
);

module.exports = router;
