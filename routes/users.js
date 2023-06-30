import { Router } from "express";
import read from "../controllers/users/read.js";
import register from "../controllers/users/register.js";
import signin from "../controllers/users/signin.js";
import validateUserRegister from "../middlewares/validator.js";

const auth_router = Router();
auth_router.post("/register", validateUserRegister, register); //POST: para crear un autor
auth_router.post("/signin", signin);
auth_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
//auth_router.put()    //PUT: para actualizar un autor
//auth_router.delete() //DELETE: para eliminar un autor
export default auth_router;
