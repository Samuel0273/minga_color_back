const validator = (schema) => [
    (req, res, next) => {
      const validation = schema.validate(req.body, { abortEarly: false });
  
      // En caso de error, responde con el array de todos los mensajes de validación
      if (validation.error) {
        return res.status(400).json({
          success: false,
          message: validation.error.details.map((error) => error.message),
        });
      }
  
      // Verificar la contraseña
      const { password } = req.body;
  
      // Verificar si la contraseña es correcta (aquí debes usar tu lógica de verificación)
      const isCorrectPassword = password === 'passwordcorrect';
  
      if (isCorrectPassword === false) {
        return res.status(401).json({
          success: false,
          message: 'Incorrect password. Please try again.',
        });
      }
  
      // En caso de que las validaciones pasen y la contraseña sea correcta
      return res.status(200).json({
        success: true,
        message: 'Successful login.',
      });
  
      // Si deseas continuar con el siguiente middleware, puedes llamar a `next()` aquí
      // return next();
    },
  ];
  
  export default validator;
  