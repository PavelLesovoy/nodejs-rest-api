const { schemas } = require("../models/user");
const { HttpError } = require("../helpers");

const validateEmail = (req, res, next) => {
  const { error } = schemas.emailSchema.validate(req.body);
  if (error) {
    throw HttpError(400, error.message);
  }
  next();
};

module.exports = { validateEmail };
