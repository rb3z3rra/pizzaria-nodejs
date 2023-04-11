const router = require("express").Router();

router.get("/find/:id");

router.get("/findAll");

router.post("/create");
router.post("/addAdress/:id");
router.post("addSaborFav/:id")

router.put("/update/:id");

router.delete("/delete/:id");
router.delete("deleteAdress/:id");
router.delete("/deleteSaborFav/:id");

module.exports = router;
