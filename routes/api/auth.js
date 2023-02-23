const express = require("express");
const router = express.Router();
const ctrl = require("../../CRUD/auth");
const { authenticate } = require("../../middlewares");
const validateLogin = require("../../middlewares/validateLogin");
const { signup, validateSignup } = require("../../CRUD/auth/signup");
const {
  subscriptionUpdate,
  validateSubscriptionUpdate,
} = require("../../CRUD/auth/subscriptionUpdate");

router.post("/signup", validateSignup, signup);

router.post("/login", validateLogin, ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.getCuttent);

router.patch(
  "/subscription",
  validateSubscriptionUpdate,
  authenticate,
  subscriptionUpdate
);

module.exports = router;