import Manga from "../models/Manga.js"

export default async(req, res, next) => {
    try{
        let one = await Manga.findOne({
            author_id: req.body.author_id,
            title: req.body.title});
        console.log(one)
        if (one) {
            return res.status(400).json({
                success: false,
                message: 'Manga already exists'
            })
        }
        return next()
    }
    catch(error){
        next(error)
    }
}