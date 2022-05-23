var express = require('express');
var router = express.Router();
const createHelloMessage = require('../utils/createHelloMessage');

/* GET hello world */
router.get('/', function (req, res, next) {
  return res.status(200).send({ message: 'Hello, world!' });
});

/* POST craft hello message. */
router.post('/', function (req, res, next) {
  // Get the name from the request body
  const { name } = req.body;
  // Craft the hello message for the user
  const message = createHelloMessage(name);
  // Check for an error and send a
  if (message === undefined) {
    return res
      .status(400)
      .send({ error: 'The name in the request body was undefined.' });
  }
  return res.status(200).send({ message });
});

module.exports = router;
