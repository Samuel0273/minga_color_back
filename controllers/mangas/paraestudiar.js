import Manga from '../../models/Manga.js'; // Importa el modelo Manga desde el archivo '../../models/Manga.js'

async function read(req, res, next) { // Declaración de una función asincrónica llamada read con parámetros req, res y next
  const { category, title, page } = req.query; // Desestructura las propiedades category, title y page del objeto req.query

  const perPage = 4; // Define la cantidad de mangas por página
  const queries = {}; // Inicializa un objeto vacío llamado queries que se utilizará para construir las consultas de búsqueda
  const sort = { title: 1 }; // Define el orden ascendente por título

  if (title) { // Si existe el parámetro title
    queries.title = { $regex: title.trim(), $options: 'i' }; // Agrega una propiedad al objeto queries para buscar títulos que coincidan con una expresión regular
  }

  if (category) { // Si existe el parámetro category
    queries.category_id = { $in: category.trim().split(',') }; // Agrega una propiedad al objeto queries para buscar categorías que coincidan con los valores proporcionados
  }

  try {
    const totalMangas = await Manga.countDocuments(queries); // Cuenta el número total de mangas que cumplen con las consultas definidas en queries

    const totalPages = Math.ceil(totalMangas / perPage); // Calcula el número total de páginas necesarias para mostrar todos los mangas

    let currentPage = parseInt(page, 10) || 1; // Convierte el parámetro page a un entero y establece un valor predeterminado de 1 si no es válido
    currentPage = Math.max(1, Math.min(currentPage, totalPages)); // Asegura que currentPage esté dentro del rango válido

    const skip = (currentPage - 1) * perPage; // Calcula la cantidad de mangas que se deben omitir en la consulta

    const mangas = await Manga.find(queries) // Realiza una consulta utilizando el modelo Manga y las consultas definidas en queries
      .select('-createdAt -updatedAt') // Excluye los campos createdAt y updatedAt de los resultados
      .sort(sort) // para ordenar los resultados de la consulta según un criterio específico. El objeto sort proporciona el criterio de ordenación, en este caso, se ordena de forma ascendente por el campo title.
      .skip(skip) //  para omitir una cantidad determinada de documentos en los resultados de la consulta. El valor de skip se calcula en función de la página actual y la cantidad de elementos por página, para permitir la paginación.
      .limit(perPage); //limita la cantidad de resultados devueltos por la consulta al número especificado por perPage. En este caso, perPage representa la cantidad de mangas que se mostrarán por página.

    const prevPage = currentPage > 1 ? currentPage - 1 : null; // Calcula el número de página anterior
    const nextPage = currentPage < totalPages ? currentPage + 1 : null; // Calcula el número de página siguiente

    const pagination = {}; // Inicializa un objeto vacío para almacenar la información de paginación

    if (prevPage !== null) { // Si prevPage no es null
      pagination.prev = prevPage; // Agrega una propiedad prev al objeto pagination con el valor de prevPage
    }

    if (nextPage !== null) { // Si nextPage no es null
      pagination.next = nextPage; // Agrega una propiedad next al objeto pagination con el valor de nextPage
    }

    return res.status(200).json({ // Devuelve una respuesta HTTP con estado 200 y un objeto JSON en la respuesta
      mangas, // Propiedad mangas que contiene la lista de mangas obtenida de la consulta
      success: true, // Propiedad success establecida en true
      pagination, // Propiedad pagination que contiene la información de paginación
    });
  } catch (error) {
    next(error); // Si se produce un error, pasa el error al siguiente middleware
  }
}

export default read; // Exporta la función read como valor predeterminado
