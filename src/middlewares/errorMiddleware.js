module.exports = function (err, req, res, next) {
  console.log(1);
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
};
