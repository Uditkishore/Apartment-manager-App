const express = require('express');
const router = express.Router();
const flatController = require("../Controllers/Flat.Controller")

router.get("/", flatController.flats);
router.get("/:id", flatController.flatById);       
router.post("/create", flatController.create);       
router.patch("/:id", flatController.updateFlat);
router.delete("/:id", flatController.deleteFlat);

module.exports = router;