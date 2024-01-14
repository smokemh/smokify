"use strict";

// Node Modules
const router = require("express").Router();

// Custom Modules
const { auth } = require("../controllers/auth.controller");

router.get("/", auth);
router.get("/login", authController.login);

module.exports = router;
