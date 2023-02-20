const { HttpError } = require("../../helpers");
const { Contact } = require("../../models/contacts");

const removeById = async (req, res, next) => {
  try {
    const { contactsId } = req.params;
    const result = await Contact.findByIdAndRemove(contactsId);

    if (!result) {
      throw HttpError(404, "Not found");
    }

    res.json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
