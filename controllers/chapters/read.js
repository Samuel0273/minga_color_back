export default function (req, res) {
  try {
    return res.status(200).json({
      success: true,
      response: "aca luego nos vamos a conectar a mongo en sprint 3",
      message: "/chapters",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      response: null,
      message: error.message,
    });
  }
}

//definir los controladores READ de mangas, chapters y users como este controller
//definir para la tarea minga-08 el controlador READ de categories igual al de authors
