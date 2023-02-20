// const { HttpError } = require("../../helpers");
const { HttpError } = require("../helpers");
// const { schemas } = require("../../models/contacts");
const { schemas } = require("../models/contacts");

const validateUpdateSchema = (req, res, next) => {
  const { error } = schemas.addSchema.validate(req.body);
  if (error) {
    return next(HttpError(400, "missing fields"));
  }
  next();
};

module.exports = { validateUpdateSchema };
