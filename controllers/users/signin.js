import User from '../../models/Users.js'

export default async (req, res) => {
    try {
        const one = await User.create(req.body);

        return res.status(201).json({
            response: one,
            success: true,
            message: 'User created'
        })
    } catch (error) {
        console.log(error)                  //consologueo el error
        return res.status(500).json({       //envío al cliente OTRA respuesta con los datos que quiera
            response:null,
            success:false,
            message:error.message
        })
    }
}