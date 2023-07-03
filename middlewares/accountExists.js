import User from "../models/Users.js";

export default async (req, res, next) => {
  try {
    let one = await User.findOne({ email: req.body.email });
    if (one) {
      return res.status(400).json({
        success: false,
        message: "user registered!",
      });
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
