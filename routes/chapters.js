import { Router } from "express";
import read from "../controllers/chapters/read.js";
import read_one from "../controllers/chapters/read_one.js";
import passport from "../middlewares/passport.js";

const chapters_router = Router();

//chapters_router.post()   //POST: para crear un autor
chapters_router.get(
  "/:id/",
  passport.authenticate("jwt", { session: false }),
  read_one
); //GET: para leer (TODOS o SOLO UNO) autores
//chapters_router.put()    //PUT: para actualizar un autor
//chapters_router.delete() //DELETE: para eliminar un autor

export default chapters_router;
