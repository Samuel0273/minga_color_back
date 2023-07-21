// Middleware finds_id.js

import { Types } from 'mongoose';

const finds_id = (model) => async (req, res, next) => {
  const { id } = req.params;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const resource = await model.findById(id);

    if (!resource) {
      return res.status(404).json({ error: 'Recurso no encontrado' });
    }

    req.resource = resource;
    next();
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar el recurso' });
  }
};

export default finds_id;
