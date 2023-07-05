import chapterCreate from "../schemas/chapter/createChapter.js"; 

export default async(req, res, next) => {
    let id =    await chapterCreate.findOne({manga_id: req.body.manga_id})
    let order = await chapterCreate.findOne({order: req.body.order})
    if (req.body.manga_id && req.body.order){
        return res.status(400).json({
            message: 'YOU SHALL NOT PASS!!!'
        })
    }else{
        next();
    }
}