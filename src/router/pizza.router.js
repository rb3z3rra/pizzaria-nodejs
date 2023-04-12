const router = require("express").Router();
const pizzaController = require("../controller/pizza.controller");

router.get("/find/:id", pizzaController.findByIdPizzaController);

router.get("/findAll", pizzaController.findAllPizzaController);

router.post("/create", pizzaController.createPizzaController);

router.put("/update/:id", pizzaController.updatePizzaController);

router.delete("/deletePizza/:id", pizzaController.deletePizzaController);

router.post("/addIngredientePizza/:id", pizzaController.addIngredientePizzaController);

router.delete("deleteIngredientePizza/:id", pizzaController.deleteIngredientePizzaController);

router.post("/addCategoriaPizza/:id", pizzaController.addCategoriaPizzaController);

router.delete("deleteCategoriaPizza/:id", pizzaController.deleteCategoriaPizzaController);

module.exports = router;