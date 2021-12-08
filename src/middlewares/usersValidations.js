const Joi = require('joi');

const schemaCreation = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().regex(/^\w+@\w+\.com/).required(),
  password: Joi.string().required(),
});

const validateCreation = (req, res, next) => {
  const { error } = schemaCreation.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = {
	validateCreation,
}