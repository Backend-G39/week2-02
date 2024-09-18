const catchError = require("../utils/catchError");
const Car = require("../models/Car");

const getAll = catchError(async (req, res) => {
  const result = await Car.findAll(); // select * from cars;
  return res.status(200).json(result);
});

module.exports = {
  getAll,
};
