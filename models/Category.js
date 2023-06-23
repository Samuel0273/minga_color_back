import { Schema, model, Types } from "mongoose";

let collection = "categories";

let schema = new Schema(
  {
    name: { type: String, required: true },
    color: { type: String, required: false },
    create_by: { type: Types.ObjectId, ref: "users" },
  },
  {
    timestamps: true,
  }
);

let Category = model(collection, schema);

export default Category;
