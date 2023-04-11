const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{6,}$')).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  role: Joi.string().valid('admin', 'user').required(),
  mobile: Joi.number().integer().min(1000000).required()
});

module.exports = schema