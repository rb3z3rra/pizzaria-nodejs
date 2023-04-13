const router = require("express").Router();
const pizzaController = require("../controller/pizza.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get(
  "/find/:id",
  authMiddleware,
  pizzaController.findByIdPizzaController
);

router.get("/findAll", authMiddleware, pizzaController.findAllPizzaController);

router.post("/create", pizzaController.createPizzaController);

router.put(
  "/update/:id",
  authMiddleware,
  pizzaController.updatePizzaController
);

router.delete(
  "/deletePizza/:id",
  authMiddleware,
  pizzaController.deletePizzaController
);

router.post(
  "/addIngredientePizza/:id",
  authMiddleware,
  pizzaController.addIngredientePizzaController
);

router.delete(
  "/deleteIngredientePizza/:id",
  authMiddleware,
  pizzaController.deleteIngredientePizzaController
);

router.post(
  "/addCategoriaPizza/:id",
  authMiddleware,
  pizzaController.addCategoriaPizzaController
);

router.delete(
  "/deleteCategoriaPizza/:id",
  authMiddleware,
  pizzaController.deleteCategoriaPizzaController
);

module.exports = router;
