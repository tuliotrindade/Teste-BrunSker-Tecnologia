const express = require("express");

const immobileController = require("../controllers/immobileController");
const authentication = require("../middlewares/authentication");
const dataValidation = require("../middlewares/immobileValidation");

const router = express.Router();

router.get("/", immobileController.getAll);

router.get("/:id", immobileController.findOne);

router.put(
  "/:immobileId",
  authentication.validation,
  dataValidation,
  immobileController.updateImmobile
);

router.post(
  "/",
  authentication.validation,
  dataValidation,
  immobileController.create
);

router.delete(
  "/:immobileId",
  authentication.validation,
  immobileController.deleteImmobile
);

module.exports = router;
