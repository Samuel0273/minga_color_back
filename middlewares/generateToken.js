import jwt from 'jsonwebtoken'

export default (req,res,next)=> {
    let token = jwt.sign(
        { email:req.body.email },       //objeto a tokenizar (encriptar) en este caso solamente el mail (pero pueden enviar lo que necesiten)
        process.env.SECRET_KEY,         //llave necesaria para tokenizar/destokenizar (crear una variable de entorno)
        { expiresIn:60*60*24*7 }        //tiempo de vencimiento del token en segundos
    )
    req.token = token                   //agrego al objeto de requerimientos la propeidad token con el token
    return next()
}