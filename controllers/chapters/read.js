import Chapter from '../../models/Chapter.js'

export default async (req, res) => {
  const mangaId = req.query.manga_id
  const page = parseInt(req.query.page) || 1 // pagina actual - 1 default
  const max_cap = 6 // nro de paginado
  
  try {
    const totalChapters = await Chapter.countDocuments({ manga_id: mangaId })
    const totalPages = Math.ceil(totalChapters / max_cap)
    const chapters = await Chapter.find({manga_id: mangaId})
      .select('manga_id title cover_photo pages order')
      .sort({order: 1}) // Ordenar los capítulos por "order" de forma ascendente
      .collation({locale: "en", numericOrdering: true}) // Collation, numericOrdering: compara numeros str como int - locale: el idioma
      .skip((page - 1) * max_cap) // Saltar los capítulos anteriores a la página actual
      .limit(max_cap) // Limitar el número de capítulos a mostrar por página

    const response = {
        chapters: chapters,
        currentPage: page,
        totalPages: totalPages,
    }

    if (page > 1) {
        response.prev = true
        response.next = false
      }
    else if (page < totalPages) {
        response.prev = false
        response.next = true
    }

    res.json(response)

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener los capítulos' })
  }
}

//C:\Users\jsnla\OneDrive\Escritorio\PyProjects\mindhub\MERN\modulo-MERN\sprint2\serompiotodo\minga_color_back\controllers\chapters\read.js