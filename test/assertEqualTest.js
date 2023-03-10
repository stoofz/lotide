const assertEqual = require('../assertEqual');

assertEqual("Lighthouse", "Lighthouse"); // Pass
assertEqual(1, 1); // Pass
assertEqual("Lighthouse Labs", "Bootcamp"); // Fail
assertEqual(1, 3); // Fail
