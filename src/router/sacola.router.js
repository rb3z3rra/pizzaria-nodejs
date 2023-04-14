const router = require("express").Router();
const sacolaController = require("../controller/sacola.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaSacola,
  validaIdParams,
  validaSacolaPedido,
} = require("../middleware/validacao.middleware");

router.post(
  "/create",
  authMiddleware,
  validaSacola,
  validaSacolaPedido,
  sacolaController.createSacolaControler
);

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  sacolaController.findByIdSacolaController
);

router.get(
  "/findAll",
  authMiddleware,
  sacolaController.findAllSacolaController
);

router.put(
  "/update/:id",
  authMiddleware,
  validaIdParams,
  validaSacola,
  sacolaController.updateSacolaController
);

router.delete(
  "/delete/:id",
  authMiddleware,
  validaIdParams,
  sacolaController.deleteSacolaController
);

module.exports = router;
