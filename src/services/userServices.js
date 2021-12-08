const users = require('../models/usersModel');

const createUser = async (name, email, password) => {
  const data = { name, email, password };
  const newUser = await users.create( data );
  return newUser;
}

module.exports = {
  createUser,
};