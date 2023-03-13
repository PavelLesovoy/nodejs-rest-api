const isValidId = require("./isValidId");
const validateAddSchema = require("./validateAddSchema");
const validateUpdateSchema = require("./validateUpdateSchema");
const validateUpdateFavoriteSchema = require("./validateUpdateFavoriteSchema");
const authenticate = require("./authenticate");
const upload = require("./upload");
const validateEmail = require("./validateEmail");

module.exports = {
  isValidId,
  validateAddSchema,
  validateUpdateSchema,
  validateUpdateFavoriteSchema,
  authenticate,
  upload,
  validateEmail,
};
