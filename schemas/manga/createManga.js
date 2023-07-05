import joi from "joi-oid";


const mangaCreate = joi.object({
  author_id: joi.objectId()
  .messages({
    'any.required': "AUTHOR ID REQUIRED",
    'string.empty': "AUTHOR ID REQUIRED",
    'string.min':   "AUTHOR ID REQUIRED"
  }),
  
  title: joi.string()
  .min(3)
  .max(40)
  .required()
  .messages({
    'any.required': "TITLE REQUIRED",
    'string.empty': "TITLE REQUIRED",
    'string.min':   "TITLE TOO SHORT",
    'string.max':   "TITLE TOO LARGE"
  }),

  cover_photo: joi.string()
  .uri()
  .required()
  .messages({
    'any.required': "IMG URL REQUIRED",
    'string.empty': "IMG URL REQUIRED",
    'string.uri':   "INVALID URL"
  }),

  description: joi.string()
  .min(12)
  .max(500)
  .required()
  .messages({
    'any.required': "DESCRIPTION REQUIRED",
    'string.empty': "DESCRIPTION REQUIRED",
    'string.min':   "DESCRIPTION TOO SHORT",
    "string.max":   "DESCRIPTION TOO LARGE"

  }),

  category_id: joi.objectId()
  .messages({
    'any.required': "CATEGORY ID REQUIRED",
    'string.empty': "CATEGORY ID REQUIRED",
    'string.min':   "CATEGORY ID TOO SHORT"
  }),
});

export default mangaCreate