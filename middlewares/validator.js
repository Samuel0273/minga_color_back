const validator = (schema) => (req, res, next) => {
  const validation = schema.validate(req.body, { abortEarly: false });
  // Validar el cuerpo de la solicitud utilizando el esquema proporcionado
  // La opción "abortEarly: false" permite mostrar todos los errores en lugar de detenerse en el primero
  // El resultado de la validación se guarda en la variable "validation"

  if (validation.error) {
    return res.status(400).json({
      success: false,
      message: validation.error.details.map((error) => error.message),
    });
  }
  // Si hay errores de validación en "validation.error"
  // Devolver una respuesta con código de estado 400 y un objeto JSON que indica que la validación no tuvo éxito
  // El mensaje de error contiene una lista de mensajes generados por "validation.error.details"

  return next();
  // Si no hay errores de validación, llamar a la función "next()" para pasar el control al siguiente middleware o controlador
};

export default validator;
// Exportar la función "validator" como un módulo predeterminado
