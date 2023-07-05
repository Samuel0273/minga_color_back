import Manga from "../../models/Manga.js"

export default async (req, res, next) => {
    try {
        const one = await Manga.create(req.body);
        console.log('create.js >>>',one.body)
        return res.status(201).json({
            response: one,       
            success: true,         
            message: 'Manga created'
        })
    } catch (error) {
        next(error)
    }
}