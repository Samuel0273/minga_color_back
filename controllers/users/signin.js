import User from "../../models/User.js";

export default async(req,res,next)=> {
    try {
        let one = await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true},
            {new: true}
        )
        delete one.password
        return res.status(200).json({
            success:true,
            message:'user signed in!',
            response: {
                user: one,
                token: req.token
            }
        })
    } catch (error) {
        return next()
    }
}