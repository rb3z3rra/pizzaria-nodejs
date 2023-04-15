const router = require("express").Router();
const bebidaController = require("../controller/bebida.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaBebida,
  validaIdParams,
} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.post("/create", authMiddleware, validaBebida, bebidaController.createBebidaController);

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  bebidaController.findByIdBebidaController
);

router.get(
  "/findAll",
  authMiddleware,
  paginacao,
  bebidaController.findAllBebidaController
);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaBebida,
  bebidaController.updateBebidaController
);

router.delete(
  "/delete/:id",
  authMiddleware,
  validaIdParams,
  bebidaController.deleteBebidaController
);

module.exports = router;
