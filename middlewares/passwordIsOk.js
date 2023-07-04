import User from "../models/User.js"
import bcryptjs from "bcryptjs"

export default async(req,res,next)=> {
    try {
        let one = await User.findOne({ email:req.body.email })
        let mongo_user_password = one.password
        let form_password = req.body.password
        let compare = bcryptjs.compareSync(form_password,mongo_user_password)
        if (compare) {
            return next()
        }
        return res.status(400).json({
            success:false,
            message:'invalid credentials!'
        })
    } catch (error) {
        return next(error)
    }
}