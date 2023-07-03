import Manga from "../models/Manga.js";

const isPropertyOf = async (req, res, next) => {
  const { mangaId } = req.params;

  try {
    const manga = await Manga.findById(mangaId);

    if (!manga) {
      return res.status(404).json({ error: "The manga was not found." });
    }

    if (
      req.author &&
      req.author._id.toString() === manga.author_id.toString()
    ) {
      return next();
    }

    if (
      req.company &&
      req.company._id.toString() === manga.company_id.toString()
    ) {
      return next();
    }

    return res
      .status(403)
      .json({ error: "You do not have permission to perform this action." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "A server error has occurred." });
  }
};

export default isPropertyOf;
