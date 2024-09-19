const catchError = require("../utils/catchError");
const Car = require("../models/Car");

const getAll = catchError(async (req, res) => {
  const result = await Car.findAll(); // select * from cars;
  return res.status(200).json(result);
});

const create = catchError(async (req, res) => {
  const result = await Car.create(req.body);
  return res.status(201).json(result);
});

module.exports = {
  getAll,
  create,
};
