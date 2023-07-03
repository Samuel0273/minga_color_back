import joi from "joi";

const userRegister = joi.object({
  email: joi
    .string()
    .required()
    .email({
      minDomainSegments: 2,
    })
    .messages({
      "string.base": "Email must be a text string",
      "string.empty": "Email is a required field",
      "string.email": "Email must be valid",
      "string.minDomainSegments":
        "Email must contain at least two domain segments",
    }),
  password: joi.string().required().min(8).max(35).alphanum().messages({
    "string.base": "Password must be a string",
    "string.empty": "Password is a required field",
    "string.min": "Password must have at least 8 characters",
    "string.max": "Password cannot exceed 35 characters",
    "string.alphanum": "Password can only contain alphanumeric characters",
  }),
  photo: joi.string().required().uri().messages({
    "string.base": "The photo must be a text string",
    "string.empty": "Photo is a required field",
    "string.uri": "Photo must be a valid URL",
  }),
});

export default userRegister;
