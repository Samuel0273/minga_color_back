import User from "../../models/User.js"

export default async(req,res,next)=> {
    try {
        let one = await User.findOneAndUpdate(
            { email:req.user.email },
            { online:false},
            { new:true }
        )
        return res.status(200).json({
            success:true,
            message: 'user id '+one._id+' disconnected'
        })
    } catch (error) {
        return next(error)
    }
}