import { Schema, model, Types } from "mongoose";

let collection = "mangas";

let schema = new Schema(
  {
    author_id: { type: Types.ObjectId, ref: "authors", require: true },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    description: { type: String, required: true },
    category_id: { type: Types.ObjectId, ref: "categories", require: true },
  },
  {
    timestamps: true,
  }
);
const Manga = model(collection, schema);
export default Manga;
