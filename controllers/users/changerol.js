import Authors from "../../models/Authors.js";
import Users from "../../models/User.js";

export const changeUserRoleToAuthor = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar y actualizar el rol del usuario
    const user = await Users.findById(id);
    // Verificar si el usuario ya es un autor
    const author = await Authors.findOne({ user_id: id });

    // Cambiar el rol y el estado "active" del autor existente
    if (author.active) {
      // Si el autor está activo, deshabilitarlo
      user.role = 0; // Cambiar el rol a 0 (usuario común)
      author.active = false; // Establecer "active" en false
    } else {
      // Si el autor está deshabilitado, habilitarlo
      user.role = 1; // Cambiar el rol a 1 (autor)
      author.active = true; // Establecer "active" en true
    }

    await user.save();
    await author.save();

    res.json({ message: 'Rol de usuario cambiado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar el rol del usuario' });
  }
};