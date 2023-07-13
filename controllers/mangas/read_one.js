import Manga from "../../models/Manga.js"

//	req.params recibe el id del manga a buscar
//  proteger los datos que no se van a renderizar en la vista
export default async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.id)
    .select('title cover_photo description category_id -_id')
    .populate({
      path: 'category_id',
      select: 'name color hover'
    })
    .populate({
      path: 'author_id',
      select: 'name last_name'
    })
    
    res.status(200).json({ 
        success: true,
        message: 'Manga successfully found',
        manga: manga
     })
  } 
  catch (error) {
     console.error(error)
     res.status(500).json({ 
        message: 'Error manga not found' 
    })
  }
}
