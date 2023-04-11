const router = require("express").Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/find/:id", authMiddleware, usuarioController.findByIdUsuarioController);

router.get("/findAll", usuarioController.findAllUsuarioController);

router.post("/create", usuarioController.createUsuarioController);
router.post("/addAdress/:id", usuarioController.addAdressUsuarioController);
router.post("addSaborFav/:id", usuarioController.addSaborFavUsuarioController);

router.put("/update/:id", usuarioController.updateUsuarioController);

router.delete("/delete/:id", usuarioController.deleteUsuarioController);
router.delete("/deleteAdress", usuarioController.deleteAdressUsuarioController);
router.delete("/deleteSaborFav/:id", usuarioController.deleteSaborFavUsuarioController);

module.exports = router;
