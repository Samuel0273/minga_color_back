import bcryptjs from "bcryptjs";

export default (req, res, next) => {
  let password = req.body.password;
  let hash = bcryptjs.hashSync(password, 16);
  req.body.password = hash;
  next();
};
