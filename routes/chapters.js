import { Router } from "express";
import read from "../controllers/chapters/read.js";

const chapters_router = Router();

//chapters_router.post()   //POST: para crear un autor
chapters_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
//chapters_router.put()    //PUT: para actualizar un autor
//chapters_router.delete() //DELETE: para eliminar un autor

export default chapters_router;
