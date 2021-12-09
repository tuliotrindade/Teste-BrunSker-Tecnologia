const jwt = require("jsonwebtoken");
const usersService = require("../services/userServices");
const rescue = require("express-rescue");

const SECRET = process.env.SECRET;

const validation = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Token not found" });
  }
  try {
    const { id, email } = jwt.verify(token, SECRET);
    const user = await usersService.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "jwt malformed" });
    }
    req.id = id;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
});

module.exports = {
  validation,
};
