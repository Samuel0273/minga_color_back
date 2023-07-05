import Manga from "../../models/Manga.js"

export default async (req, res) => {
  try {
    let all = await Manga.find()
    if (all.length > 0) {
      return res.status(200).json({
        response: all,
        success: true,
        message: "you have requested GET /api/mangas",
        mindhub: "the best",
        date: new Date()
      })
    } else {
      return res.status(404).json({
        response: null,
        success: false,
        message: "Mangas not found",
        mindhub: "the best",
        date: new Date()
      })
    }
  }
  catch (error) {
    console.log(error)
    return res.status(500).json({
      response: null,
      success: false,
      message: error.message,
    })
  }
}


//export default function (req, res, next) {
//  try {
//    
//    return res.status(200).json({
//      success: true,
//      response: "aca luego nos vamos a conectar a mongo en sprint 3",
//      message: "/mangas",
//    });
//  } catch (error) {
//    next(error);
//  }
//}
