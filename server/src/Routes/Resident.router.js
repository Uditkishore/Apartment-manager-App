const express = require('express');
const router = express.Router();
const userController = require("../Controllers/Resident.Controller")
const { validateRegistration, validateLogin } = require('../middlewares/validateLogger');
// const authenticate = require('../middlewares/authenticate'); 

router.get("/", userController.residents);
router.get("/:id", userController.residentById);
router.patch("/:id", userController.updateResident);
router.delete("/:id", userController.deleteResident);
router.post("/register", validateRegistration, userController.register);
router.post("/login", validateLogin, userController.login);

module.exports = router;