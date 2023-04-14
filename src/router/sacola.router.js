const router = require("express").Router();
const sacolaController = require("../controller/sacola.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create", authMiddleware, sacolaController.createSacolaControler);

router.get("/find/:id", authMiddleware, sacolaController.findByIdSacolaController);

router.get("/findAll", authMiddleware, sacolaController.findAllSacolaController);

router.put("/update/:id", authMiddleware, sacolaController.updateSacolaController);

router.delete("/delete/:id", authMiddleware, sacolaController.deleteSacolaController);

module.exports = router;

