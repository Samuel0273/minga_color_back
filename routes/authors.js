import { Router } from "express";
import read from "../controllers/authors/read.js";
import { getAuthorsAdmin } from "../controllers/authors/admin.js";
import createAuthorController from "../controllers/authors/create.js";

const author_router = Router();


author_router.get("/", read); //GET: para leer (TODOS o SOLO UNO) autores
author_router.post('/create', createAuthorController )
author_router.get('/admin', getAuthorsAdmin)


export default author_router;
