import { Schema, model, Types } from "mongoose";

let collection = "authors";

let schema = new Schema(
  {
    name: { type: String, required: true },
    last_name: { type: String },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date },
    photo: { type: String, required: true },
    user_id: {
      type: Types.ObjectId, //tipo de dato especial de mongo (el objectid guarda la información encriptada del documento)
      ref: "users", //nombre de la colección a la cual pertenecen los ids (nombre de la colección a la cual se quiere REFERENCIAR/RELACIONAR)
      required: true,
    },
    active: { type: Boolean, default: false }, //default es un parámetro que hace que: si el usuario envía el dato, lo usa y en caso contrario usa el valor predeterminado en esta propiedad
  },
  {
    timestamps: true,
  }
);

const Authors = model(collection, schema);
export default Authors;
