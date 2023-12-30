"use strict";

// Node Modules

const cors = require("cors");
const cookieParser = require("cookie-parser");

// Initial express app
const express = require("express");
const app = express();

// EJS setting

app.set("view engine", "ejs");

// Setting Static Directory

app.use(express.static(`${__dirname}/public`));

// Enable cors $ cookie parser
app.use(cors()).use(cookieParser());

// Custom Modules

const login = require("./src/routes/login.route");

// Login Page

app.use("/login", login);

app.listen(5000, () => {
  console.log("Server listening att http://localhost:5000");
});
