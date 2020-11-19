var express = require('express');
var router = express.Router();
const { getEmployees, delEmployee } = require('./../model/employees');

router.get('/employees', function(req, res, next) {
  res.status(200).json(getEmployees());
});

router.delete('/employees/:id', function (req, res, next) {
  try {
    res.status(200).send(delEmployee(req.params.id));
  } catch (error) {
    res.status(400).send(error);
    console.error(error);
  }
});

module.exports = router;
