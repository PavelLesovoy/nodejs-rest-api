const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contacts");
const { validateUpdateSchema } = require("../../middlewares");

const updateById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateUpdateSchema,
  updateById,
};
