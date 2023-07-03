import User from "../models/User.js"
import passport from "passport"
import { Strategy,ExtractJwt } from "passport-jwt"

export default passport.use(
    new Strategy(
        //defino una nueva estrategia para extraer el token, le tengo que pasar como parámetros
        {   
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //propiedad "token de la solicitud" que la va a extraer DESDE la autorizacion de encabezamientos (header) de tipo BEARER
            secretOrKey: process.env.SECRET_KEY
            //la clave secreta definida en la variable de entorno
        },              
        async (jwt_payload,done) => {
            try {              
                let user = await User.findOne({ email:jwt_payload.email })
                if (user) {
                    delete user.password
                    return done(null, user)
                    //done es como un super NEXT
                        //el primer parametro es para manejar el error que puede llegar a ocurrir
                        //el segundo parámetro son los datos a agregar en el objeto de requerimientos
                        //POR DEFAULT agrega esos datos en una propiedad llamada USER
                        //req.user va a tener los datos encontrados en la variable user de la L16
                } else {
                    return done(null)
                }
            } catch (error) {
                return done(error)
                //tanto en L26 como en L29 no agrego ninguna propiedad al objeto de requerimientos
                //por lo que no es necesario agregar un segundo parámetros
            }
        }
    )
)