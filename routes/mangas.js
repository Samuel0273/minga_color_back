import { Router } from "express";


import read from '../controllers/mangas/read.js'
const mangas_router = Router();


mangas_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
//mangas_router.put()    //PUT: para actualizar un autor
//mangas_router.delete() //DELETE: para eliminar un autor

export default mangas_router;
