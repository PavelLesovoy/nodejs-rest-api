const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCuttent = require("./getCurrent");
const subscriptionUpdate = require("./subscriptionUpdate");
const updateAvatar = require("./updateAvatar");
const verify = require("./verify");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  getCuttent,
  subscriptionUpdate,
  updateAvatar,
  verify,
  resendVerifyEmail,
};
