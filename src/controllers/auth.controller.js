"use strict";

// Node Modules

const querystring = require("querystring");

// Custom Modules

const apiConfig = require("../config/api.config");
const utils = require("../utils/helpers.util");

const auth = (req, res) => {
  const state = utils.generateRandomString(16);
  res.cookie(apiConfig.STATE_KEY, state);

  res.redirect(
    "https://accounts.spotify.com/authorize" +
      querystring.stringify({
        response_type: "code",
        client_id: apiConfig.CLIENT_ID,
        scope: apiConfig.SCOPES,
        redirect_uri: apiConfig.REDIRECT_URI,
        state,
      })
  );
};

module.exports = {
  auth,
};
