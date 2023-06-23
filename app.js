import "dotenv/config.js"; //configura las variables de entorno de mi aplicacion(datos sensibles).
import "./config/database.js";
// import createError from "http-errors"; //modulo necesario para crear/configurar errores en nuestro servidor.
import express from "express"; //modulo necesario para levantar y configurar en nuestro servidor.
import path from "path"; //modulo necesario para conocer la ubicacion de nuestro servidor.
// import cookieParser from "cookie-parser"; //modulo necesario para configurar cookies.
import logger from "morgan"; //modulo necesario para registrar las peticiones que se realizan al servidor.
import cors from "cors";
import { __dirname } from "./utils.js";
import indexRouter from "./routes/index.js"; //enrutador principal de la aplicacion.

let app = express(); //defino una variable con la ejecucion del modulo de express para poder crear un servidor.

// view engine setup
// set es un metodo que configura algo.
app.set("views", path.join(__dirname, "views")); //configuro que las vistas generadas en el backend estan en la carpeta views.
app.set("view engine", "ejs"); //configuro que las vistas se van a definir con el lenguaje EJS (motor de plantilla).

//middlewars
//son funciones que se ejecutan con cada peticion y que van a permitir/no permitir realizar algo.
//use es un metodo que obliga (en este caso) a mi aplicacion a usar algo (ejecutar una funcion).
app.use(logger("dev")); //obliga al servidor a usar el middlewars de registro de peticiones.
app.use(express.json()); //obliga al servidor a transformar/manejar formato JSON (post/put)
app.use(express.urlencoded({ extended: false })); //obliga al servidor a acceder a consultas complejas(permite leer queries y params de una petición).
app.use(express.static(path.join(__dirname, "public"))); //obliga al servidor a generar una carpeta de acceso PUBLICO al cliente
app.use(cors()); //obliga al servidor a permitir el cruce de origenes de front/back
//endpoints
app.use("/api", indexRouter); //obliga al servidor a usar las rutas definidas en el enrutador principal con la palabrita "/api"

export default app;
