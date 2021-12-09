const jwt = require("jsonwebtoken");

const SECRET = process.env.SECRET;

const encriptedToken = (data) => {
  const token = jwt.sign(data, SECRET);
  return token;
};

module.exports = encriptedToken;
