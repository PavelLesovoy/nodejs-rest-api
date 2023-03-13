const bcrypt = require("bcrypt");
const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");
const { validateSignup } = require("../../middlewares/validateSignup");
const gravatar = require("gravatar");
const { v4 } = require("uuid");
const { BASE_URL } = process.env;
const sendEmail = require("../../helpers/sendEmail");

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      throw HttpError(409, "Email is use");
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = v4();
    const newUser = await User.create({
      ...req.body,
      password: hashPassword,
      avatarURL,
      verificationToken,
    });

    const verifyEmail = {
      to: email,
      subject: "Verify you email",
      html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click verify email</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
      email: newUser.email,
      subscription: newUser.subscription,
      avatar: newUser.avatar,
      verificationToken,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, validateSignup };
