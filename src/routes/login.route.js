"use strict";


// Node Modules
const router = require("express").Router();


//Custom Modules

const{ login } = require ("../controllers/login.controller");



router.get('/',login);




module.exports=router;

