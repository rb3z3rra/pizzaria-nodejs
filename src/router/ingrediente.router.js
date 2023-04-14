const router = require("express").Router();
const ingredienteController = require("../controller/ingrediente.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaIdParams,
  validaIngrediente,
} = require("../middleware/validacao.middleware");

router.post(
  "/create",
  authMiddleware,
  validaIngrediente,
  ingredienteController.createIngredienteController
);

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  ingredienteController.findByIdIngredienteController
);

router.get(
  "/findAll",
  authMiddleware,
  ingredienteController.findAllIngredienteController
);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaIngrediente,
  ingredienteController.updateIngredienteController
);

router.delete(
  "/delete/:id",
  authMiddleware,
  validaIdParams,
  ingredienteController.deleteIngredienteController
);

module.exports = router;
