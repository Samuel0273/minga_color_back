import { Router } from "express";
import read from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import signin from "../controllers/users/signin.js";
import validator from "../middlewares/validator.js";
import userRegister from "../schemas/auth/register.js";
import signinSchema from "../schemas/auth/signinSchema.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import passwordIsOk from "../middlewares/passwordIsOk.js";
import generateToken from "../middlewares/generateToken.js";
import passport from "../middlewares/passport.js";
import signout from "../controllers/users/signout.js";

const auth_router = Router();
auth_router.post(
  "/register",
  validator(userRegister),
  accountExists,
  createHash,
  register
); //POST: para crear un autor
auth_router.post(
  "/signin",
  validator(signinSchema),
  accountNotExists,
  passwordIsOk,
  generateToken,
  signin
);
auth_router.post(
  "/signout",
  passport.authenticate("jwt", { session: false }),
  signout
);
auth_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
//auth_router.put()    //PUT: para actualizar un autor
//auth_router.delete() //DELETE: para eliminar un autor
export default auth_router;
