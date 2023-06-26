import { Router } from "express";
import read from "../controllers/authors/read.js";

const author_router = Router();

//author_router.post()   //POST: para crear un autor
author_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
//author_router.put()    //PUT: para actualizar un autor
//author_router.delete() //DELETE: para eliminar un autor

export default author_router;
