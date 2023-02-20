const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contacts");
const { validateAddSchema } = require("../../middlewares");

const postContact = async (req, res, next) => {
  try {
    const result = await Contact.create(req.body);

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateAddSchema,
  postContact,
};
