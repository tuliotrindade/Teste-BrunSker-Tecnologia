const rescue = require("express-rescue");

const userServices = require("../services/userServices");

const tokenGenerator = require("../helpers/tokenGenerator");

const createUser = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  await userServices.createUser(name, email, password);
  res.status(201).json({ message: `The user ${name} has been registered` });
});

const login = rescue(async (req, res) => {
  const { email, password } = req.body;
  const { id } = await userServices.findUserByEmail(email);
  const data = { email, password, id };
  const token = tokenGenerator(data);
  res.status(200).send({ token });
});

module.exports = {
  createUser,
  login,
};
