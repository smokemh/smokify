"use strict";

// Custom Modules

const apiConfig = require("../config/api.config");

// Generate a random string containing numbers and letters
// @param {number} length The length of the string
// @return {string} The generated string
const generateRandomString = function (length) {
  let randomString = "";
  const possibleLetters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length - 1; i++) {
    const randomIndex = Math.floor(Math.random() * possibleLetters.length);
    randomString += possibleLetters[randomIndex];
  }
  return randomString;
};

module.exports = {
  generateRandomString,
};
