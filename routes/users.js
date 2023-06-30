import { Router } from "express"
import create from "../controllers/users/signin.js";

import validator from "../middlewares/validator.js";
import userSignin from "../schemas/auth/signin.js";


const auth_router = Router()

//auth_router.get()
auth_router.post('/signin',validator(userSignin) , create);

export default auth_router