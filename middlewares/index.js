const isValidId = require("./isValidId");
const validateAddSchema = require("./validateAddSchema");
const validateUpdateSchema = require("./validateUpdateSchema");
const validateUpdateFavoriteSchema = require("./validateUpdateFavoriteSchema");
const authenticate = require("./authenticate");

module.exports = {
  isValidId,
  validateAddSchema,
  validateUpdateSchema,
  validateUpdateFavoriteSchema,
  authenticate,
};
