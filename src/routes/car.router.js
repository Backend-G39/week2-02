const { getAll, create, getOne, destroy } = require("../controllers/car.controllers");
const express = require("express");

const carRouter = express.Router();

carRouter.route("/")
  .get(getAll)
  .post(create);

carRouter.route("/:id")
  .get(getOne)
  .delete(destroy)

module.exports = carRouter;
