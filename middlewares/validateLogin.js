const { HttpError } = require("../helpers");
const { schemas } = require("../models/user");

const validateLogin = (req, res, next) => {
  const { error } = schemas.loginSchema.validate(req.body);

  if (error) {
    throw HttpError(400, "missing required name field");
  }

  next();
};

module.exports = validateLogin;
