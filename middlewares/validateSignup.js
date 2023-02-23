const { HttpError } = require("../helpers");
const { schemas } = require("../models/user");

const validateSignup = (req, res, next) => {
  const { error } = schemas.registerSchema.validate(req.body);

  if (error) {
    return next(HttpError(400, error.message));
  }

  next();
};

module.exports = { validateSignup };
