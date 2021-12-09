const users = require("../models/usersModel");

const createUser = async (name, email, password) => {
  const data = { name, email, password };
  const newUser = await users.create(data);
  return newUser;
};

const findUserByEmail = async (data) => {
  const findUser = await users.findOne({ where: { email: data } });
  return findUser;
};

module.exports = {
  createUser,
  findUserByEmail,
};
