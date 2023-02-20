const express = require("express");
const router = express.Router();
const ctrl = require("../../CRUD/contacts");
const { postContact } = require("../../CRUD/contacts/postContact");
const { updateById } = require("../../CRUD/contacts/updateById");
const {
  updateStatusContact,
} = require("../../CRUD/contacts/updateStatusContact");
const { isValidId } = require("../../middlewares");
const { validateAddSchema } = require("../../middlewares");
const {
  validateUpdateSchema,
} = require("../../middlewares/validateUpdateSchema");
const {
  validateUpdateFavoriteSchema,
} = require("../../middlewares/validateUpdateFavoriteSchema");

router.get("/", ctrl.getAllContacts);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateAddSchema, postContact);

router.delete("/:contactId", isValidId, ctrl.removeById);

router.put("/:contactId", validateUpdateSchema, isValidId, updateById);

router.patch(
  "/:contactId/favorite",
  validateUpdateFavoriteSchema,
  isValidId,
  updateStatusContact
);

module.exports = router;
