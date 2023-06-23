import app from "../app.js"; //importo la aplicacion de bac configurada.
import debug from "debug";
import http from "http"; //importo el modulo para crear servidores.
/**
 * Get port from environment and store in Express.
 */
let port = normalizePort(process.env.PORT || "8080"); //defino el puerto donde va a funcionar nuestro sevidor.
//defino un operador OR para normalizar el puerto, porque cuando hostee/deployee el servidor el hosting me va a asignar el puerto que tenga libre para mi app.
app.set("port", port); //configuro el puerto
/**
 * Create HTTP server.
 */
let server = http.createServer(app); //utilizo el modulo http para crear un servidor (con las configuraciones que se realizaron en app).
/**
 * Listen on provided port, on all network interfaces.
 */
function ready() {
  console.log("server ready on port" + port); //me informa en la consola que el servidor esta funcionando correctamente.
}
server.listen(port, ready); //listen se utiliza para escuchar un puerto y es el encargado para levantar efectivamente el servidor(empieza a funcionar).
server.on("error", onError);
server.on("listening", onListening);
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  let bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
