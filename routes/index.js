import express from "express";
import author_router from "./authors.js";
import categories_router from "./categories.js";
import mangas_router from "./mangas.js";
import chapters_router from "./chapters.js";
import auth_router from "./users.js";

let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/authors", author_router);
router.use("/categories", categories_router);
router.use("/mangas", mangas_router);
router.use("/chapters", chapters_router);
router.use("/auth", auth_router);

export default router;
