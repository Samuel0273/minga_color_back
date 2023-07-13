import createHttpError from 'http-errors'
import Categories from '../../models/Categories.js'

export default async(req,res,next) => {
    try{
        let categories = await Categories.find()
        if(categories.length > 0){
            return res.status(200).json({
                categories,
                success:true,
                message:'you have requested GET /api/categories/',
                date: new Date()
            })
        }
        else{
            return next(createHttpError(404, 'Not found categories'))
        }
    }
    catch(error){
        next(error)
    }
}