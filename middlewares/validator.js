import userRegister from "../schemas/auth/signin.js";

const validator = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.status(400).json({
      success: false,
      message: validation.error.details.map((error) => error.message),
    });
  }

  return next();
};

const validateUserRegister = validator(userRegister);

export default validateUserRegister;
