// const { HttpError } = require("../../helpers");
const { HttpError } = require("../helpers");
// const { schemas } = require("../../models/contacts");
const { schemas } = require("../models/contacts");

const validateUpdateFavoriteSchema = (req, res, next) => {
  const { error } = schemas.updateFavoriteSchema.validate(req.body);

  if (error) {
    return next(HttpError(400, "missing field favorite"));
  }

  next();
};

module.exports = { validateUpdateFavoriteSchema };
