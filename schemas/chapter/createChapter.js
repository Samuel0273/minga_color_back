import joi from "joi-oid"

const chapterCreate = joi.object({
    manga_id: joi.objectId().messages({}),
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
    .messages({
      'string.uri':   "INVALID URL"
    }),
    pages: joi.string()
    .uri()
    .required()
    .messages({
        'any.required': "PAGE URL REQUIRED",
        'string.empty': "PAGE URL REQUIRED",
        'string.uri':   "INVALID URL"
    }),
    order: joi.number()
    .min(0)
    .required()
    .messages({
        'any.required': "ORDER REQUIRED",
        'number.base':  "ORDER REQUIRED",
        'number.min':   "INVALID ORDER NUM"
    })
})

export default chapterCreate