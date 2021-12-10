const jwt = require("jsonwebtoken");

const SECRET = 'temumsegredoaqui'

const encriptedToken = (data) => {
  try {
    const token = jwt.sign(data, SECRET);
    return token;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = encriptedToken;
