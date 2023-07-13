import { Router } from "express";
import read from "../controllers/categories/read.js";


const categories_router = Router();

//categories_router.post()   //POST: para crear un autor
categories_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
//categories_router.put('/')    //PUT: para actualizar un autor
//categories_router.delete() //DELETE: para eliminar un autor

export default categories_router
