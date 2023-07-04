import User from "../models/User.js"

export default async(req,res,next)=> {
    try {
        let one = await User.findOne({ email:req.body.email })
        console.log(one)
        if (!one) {
            return res.status(404).json({
                success:false,
                message: 'user nor registered!'
            })
        }
        return next()
    } catch (error) {
        return next(error)
    }
}