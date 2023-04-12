const router = require("express").Router();
const ingredienteController = require("../controller/ingrediente.controller");

router.post("/create", ingredienteController.createIngredienteController);

router.get("/find/:id", ingredienteController.findByIdIngredienteController);

router.get("/findAll", ingredienteController.findAllIngredienteController);

router.put("/update/:id", ingredienteController.updateIngredienteController);

router.delete("/delete/:id", ingredienteController.deleteIngredienteController);

module.exports = router;
