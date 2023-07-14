import Manga from "../../models/Manga.js";
import Chapter from "../../models/Chapter.js";

export default async function (req, res, next) {
  try {
    const mangaId = req.query.manga;
    const chapterId = req.params.id;
    // "6499e3a6958d5eae3a45bd8f"
    //Excluir campos que no se van a renderizar en la vista
    const projection = {
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    };
    // Obtener el manga correspondiente al ID
    const manga = await Manga.findById(mangaId).select(projection);
    if (!manga) {
      return res.status(404).json({ message: "Manga not found" });
    }
    // Obtener el capítulo correspondiente al ID
    const chapter = await Chapter.findById(chapterId).select(projection);
    if (!chapter) {
      return res.status(404).json({ message: "Cahapter not found" });
    }
    // Obtener todos los capítulos relacionados con el manga
    const chapters = await Chapter.find({ manga_id: mangaId }).select(
      projection
    );
    if (!chapters || chapters.length === 0) {
      return res.status(404).json({ message: "Chapters not found" });
    }
    // Encontrar el índice del capítulo actual en la lista de capítulos
    const currentChapterIndex = chapters.findIndex(
      (chapter) => chapter._id.toString() === chapterId
    );
    const nextChapterIndex = currentChapterIndex + 1;
    const nextChapter =
      nextChapterIndex < chapters.length ? chapters[nextChapterIndex] : null;

    const response = {
      chapter: {
        title: chapter.title,
        pages: chapter.pages,
        order: chapter.order,
        next: nextChapter ? nextChapter._id : null,
      },
    };

    res.json(response);
  } catch (err) {
    return next(err);
  }
}
