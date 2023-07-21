// controllers/authors/admin.js

import Authors from "../../models/Authors.js";

export const getAuthorsAdmin = async (req, res) => {
  try {
    // Obtener autores activos e inactivos por separado
    const activeAuthors = await Authors.find({ active: true });
    const inactiveAuthors = await Authors.find({ active: false });

    res.json({ activeAuthors, inactiveAuthors });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los autores' });
  }
};