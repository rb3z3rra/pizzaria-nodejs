const router = require("express").Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const {
  validaUsuario,
  validaIdParams,
  valida_IdBody,
  validaEndereco,
} = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get(
  "/find/:id",
  authMiddleware,
  validaIdParams,
  usuarioController.findByIdUsuarioController
);

router.get(
  "/findAll",
  authMiddleware,
  paginacao,
  usuarioController.findAllUsuarioController
);

router.post(
  "/create",
  validaUsuario,
  usuarioController.createUsuarioController
);
router.post(
  "/addAdress/:id",
  authMiddleware,
  validaIdParams,
  validaEndereco,
  usuarioController.addAdressUsuarioController
);
router.post(
  "/addPizzaFav/:id",
  authMiddleware,
  validaIdParams,
  valida_IdBody,
  usuarioController.addPizzaFavUsuarioController
);

router.put(
  "/update/:id",
  validaIdParams,
  validaUsuario,
  usuarioController.updateUsuarioController
);

router.delete(
  "/delete/:id",
  authMiddleware,
  validaIdParams,
  usuarioController.deleteUsuarioController
);
router.delete(
  "/deleteAdress",
  authMiddleware,
  usuarioController.deleteAdressUsuarioController
);
router.delete(
  "/deletePizzaFav/:id",
  authMiddleware,
  validaIdParams,
  usuarioController.deletePizzaFavUsuarioController
);

module.exports = router;
