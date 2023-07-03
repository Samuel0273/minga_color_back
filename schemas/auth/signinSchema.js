import joi from 'joi';

const userSignup = joi.object({
  email: joi.string()
    .required()
    .email({
      minDomainSegments: 2
    })
    .messages({
      'string.base': 'Email should be a string',
      'any.required': 'Email is required',
      'string.email': 'Invalid email format',
    }),
  password: joi.string()
    .required()
    .min(8)
    .max(35)
    .alphanum()
    .messages({
      'string.base': 'Password should be a string',
      'any.required': 'Password is required',
      'string.min': 'Password should have a minimum length of 8 characters',
      'string.max': 'Password should have a maximum length of 35 characters',
      'string.alphanum': 'Password should only contain alphanumeric characters',
    }),
});

export default userSignup;
