"use strict";

// Node Modules
require("dotenv").config();

// The Base Address of web api
const BASE_URL = "https://api.spotify.com/v1";

// The base Address of spotify authentication token
const TOKEN_BASE_URL = "https://accounts.spotify.com/api";

// Spotify Client ID
const CLIENT_ID = process.env.CLIENT_ID;

// Spotify Client Secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Spotify Redirect URI
const REDIRECT_URI = process.env.REDIRECT_URI;

// Spotify Scopes
const SCOPES = process.env.SCOPES;

// Authentication Token State key
const STATE_KEY = "spotify_auth_state";

// API request query params
const MARKET = "US";
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

module.exports = {
  BASE_URL,
  TOKEN_BASE_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
  SCOPES,
  STATE_KEY,
  MARKET,
  LOW_LIMIT,
  DEFAULT_LIMIT,
};
