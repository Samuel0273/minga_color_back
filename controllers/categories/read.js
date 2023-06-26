import Categories from "../../models/Categories.js";

export default async (req, res) => {
  try {
    let all = await Categories.find(); //espero la busqueda de todos los autores
    if (all.length > 0) {
      //que hago si encuentro autores?
      return res.status(200).json({
        //envío al cliente una respuesta con los datos que quiera
        response: all,
        success: true,
        message: "you have requested GET /api/categories/",
        mindhub: "the best",
        date: new Date(),
      });
    } else {
      //que hago si NO encuentro autores
      return res.status(404).json({
        //envio al cliente OTRA respuesta con los datos que quiera
        response: null,
        success: false,
        message: "not found categories",
        mindhub: "the best",
        date: new Date(),
      });
    }
  } catch (error) {
    //que hago si no puedo INTENTAR buscar algo y salta el catch
    console.log(error); //consologueo el error
    return res.status(500).json({
      //envío al cliente OTRA respuesta con los datos que quiera
      response: null,
      success: false,
      message: error.message,
    });
  }
};
