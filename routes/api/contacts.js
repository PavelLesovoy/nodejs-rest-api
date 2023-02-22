const express = require("express");
const router = express.Router();
const ctrl = require("../../CRUD/contacts");
const { postContact } = require("../../CRUD/contacts/postContact");
const { updateById } = require("../../CRUD/contacts/updateById");
const {
  updateStatusContact,
} = require("../../CRUD/contacts/updateStatusContact");
const { isValidId, authenticate } = require("../../middlewares");
const { validateAddSchema } = require("../../middlewares");
const {
  validateUpdateSchema,
} = require("../../middlewares/validateUpdateSchema");
const {
  validateUpdateFavoriteSchema,
} = require("../../middlewares/validateUpdateFavoriteSchema");

router.get("/", authenticate, ctrl.getAllContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getById);

router.post("/", authenticate, validateAddSchema, postContact);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeById);

router.put(
  "/:contactId",
  authenticate,
  validateUpdateSchema,
  isValidId,
  updateById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateUpdateFavoriteSchema,
  isValidId,
  updateStatusContact
);

module.exports = router;
