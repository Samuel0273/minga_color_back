import { Router } from "express";
import read from "../controllers/mangas/read.js";
import create from "../controllers/mangas/create.js"

import validator from "../middlewares/validator.js"
import mangaCreate from "../schemas/manga/createManga.js"
import mangaExists from "../middlewares/mangaExists.js";
import passport from "../middlewares/passport.js";

const mangas_router = Router();

mangas_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
mangas_router.post("/create", validator(mangaCreate), passport.authenticate('jwt',{ session:false }), mangaExists, create)   //POST: para crear un autor
//mangas_router.put()    //PUT: para actualizar un autor
//mangas_router.delete() //DELETE: para eliminar un autor

export default mangas_router;
