// const Joi = require("joi");

// const addSchema = Joi.object({
//   name: Joi.string().min(3).max(20).required(),
//   email: Joi.string()
//     .email({
//       minDomainSegments: 2,
//       tlds: { allow: ["com", "net", "ua", "ukr"] },
//     })
//     .required(),
//   phone: Joi.number().integer().positive().min(5).required(),
// });

// module.exports = {
//   addSchema,
// };
const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

module.exports = {
  addSchema,
};
