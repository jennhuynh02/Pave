const express = require('express');
const router = express.Router();
const { employees } = require("../../database");

// Grabs all employees
router.get('/', (req, res) => {
  res.json(employees)
})

// Performs a specific search - for ex. Gender = Female, Country = USA
router.post('/', (req, res) => {
  const filters = req.body;
  console.log(employees[0])
  res.json(employees.filter(emp => {
    for (const filter in filters) {
      if (emp[filter] !== filters[filter]) return false;
    }
    return true;
  }));
})

module.exports = router