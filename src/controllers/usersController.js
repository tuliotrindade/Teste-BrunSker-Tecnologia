const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  await userServices.createUser(name, email, password);
  res.status(200).json({ message: `The user ${ name } has been registered` });
};

module.exports = {
  createUser,
}
