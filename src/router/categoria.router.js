const router = require("express").Router();
const categoriaController = require("../controller/categoria.controller");

router.post("/create", categoriaController.createCategoriaController);

router.get("/find/:id", categoriaController.findByIdCategoriaController);

router.get("/findAll", categoriaController.findAllCategoriaController);

router.put("/update/:id", categoriaController.updateCategoriaController);

router.delete("/delete/:id", categoriaController.deleteCategoriaController);

module.exports = router;