import { Router } from "express";
import read from "../controllers/chapters/read.js";
import create from "../controllers/chapters/create.js"

import validator from "../middlewares/validator.js";
import chapterCreate from "../schemas/chapter/createChapter.js";
import chapterExists from "../middlewares/chapterExists.js";
import isPropertyOf from "../middlewares/is_property_of.js"
import passport from "../middlewares/passport.js";

const chapters_router = Router();

chapters_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
chapters_router.post("/create", validator(chapterCreate), passport.authenticate('jwt',{ session:false }), isPropertyOf, chapterExists, create)   //POST: para crear un autor
//chapters_router.put()    //PUT: para actualizar un autor
//chapters_router.delete() //DELETE: para eliminar un autor

export default chapters_router;
