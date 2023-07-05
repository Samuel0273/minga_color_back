import Chapter from "../../models/Chapter.js"

export default async (req, res, next) => {
    try {
        const one = await Chapter.create(req.body);
        console.log('create.js >>>',one.body)
        return res.status(201).json({
            response: one,       
            success: true,         
            message: 'Chapter created'
        })
    } catch (error) {
        next(error)
    }
}