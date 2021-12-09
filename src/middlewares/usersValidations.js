const Joi = require("joi");
const userServices = require("../services/userServices");
const rescue = require("express-rescue");

const schemaCreation = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string()
    .regex(/^\w+@\w+\.com/)
    .required(),
  password: Joi.string().required(),
});

const schemaLogin = Joi.object().keys({
  email: Joi.string()
    .regex(/^\w+@\w+\.com/)
    .required(),
  password: Joi.string().required(),
});

const validateCreation = rescue(async (req, res, next) => {
  const { email } = req.body;
  const findUser = await userServices.findUserByEmail(email);
  if (findUser) {
    return res.status(400).json({ message: "email already resgistered" });
  }
  const { error } = schemaCreation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
});

const validateLogin = rescue(async (req, res, next) => {
  const { error } = schemaLogin.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  const { email } = req.body;
  const findUser = await userServices.findUserByEmail(email);
  if (!findUser) {
    return res.status(400).json({ message: "Incorrect username or password" });
  }
  next();
});

module.exports = {
  validateCreation,
  validateLogin,
};
