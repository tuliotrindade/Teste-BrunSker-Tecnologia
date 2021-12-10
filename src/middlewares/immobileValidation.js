const Joi = require("joi");
const rescue = require("express-rescue");

const schema = Joi.object().keys({
  address: Joi.string().required(),
  city: Joi.string().required(),
  cep: Joi.string().required(),
  value: Joi.number().required(),
  internalArea: Joi.number().required(),
  type: Joi.string().required(),
});

const dataValidation = rescue(async (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
});

module.exports = dataValidation;
