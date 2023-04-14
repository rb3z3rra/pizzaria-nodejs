const router = require("express").Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaCategoria,
  validaIdParams,
} = require("../middleware/validacao.middleware");

router.post(
  "/create",
  authMiddleware,
  validaCategoria,
  categoriaController.createCategoriaController
);

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  categoriaController.findByIdCategoriaController
);

router.get("/findAll", authMiddleware,categoriaController.findAllCategoriaController);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaCategoria,
  categoriaController.updateCategoriaController
);

router.delete("/delete/:id",authMiddleware, validaIdParams, categoriaController.deleteCategoriaController);

module.exports = router;
