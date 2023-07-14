import { Router } from "express";
import read_one from "../controllers/chapters/read_one.js";
import create from "../controllers/chapters/create.js";
import validator from "../middlewares/validator.js";
import chapterCreate from "../schemas/chapter/createChapter.js";
import isPropertyOf from "../middlewares/is_property_of.js";
import passport from "../middlewares/passport.js";

const chapters_router = Router();
//chapters_router.post()   //POST: para crear un autor
chapters_router.get(
  "/:id/",
  passport.authenticate("jwt", { session: false }),
  read_one
); //GET: para leer (TODOS o SOLO UNO) autores
chapters_router.post(
  "/create",
  validator(chapterCreate),
  passport.authenticate("jwt", { session: false }),
  isPropertyOf,
  /* chapterExists */ create
); //POST: para crear un autor

export default chapters_router;
