import { Schema, model, Types } from "mongoose";

let collection = "users";

let schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, required: true },
    online: { type: Boolean },
    verified: { type: Boolean, required: true },
    verify_code: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

let Users = model(collection, schema);

export default Users;
