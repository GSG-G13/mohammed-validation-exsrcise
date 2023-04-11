'use strict';

const router = require('express').Router();

const error = require('./error');
const signupSchema = require('../utils/validation/signupSchema');
const signinSchema = require('../utils/validation/signinSchema');

router.post('/signup', (req, res) => {
  // Write your code here
  const { error } = signupSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
});

router.post('/login', (req, res) => {
  // Write your code here
  const { error } = signinSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
});

router.use(error.client);
router.use(error.server);

module.exports = router;
