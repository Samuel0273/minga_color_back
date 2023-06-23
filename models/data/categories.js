import "dotenv/config.js";
import "../../config/database.js";
import Category from "../Category.js";

let categories = [
  {
    name: "shonen",
    color: "#EF8481",
    create_by: "5a393e2d8f48d701b81e81e7",
  },
  {
    name: "comics",
    color: "#8883F0",
    create_by: "603c38b2ed260e1f4cc78a2f",
  },
];

Category.insertMany(categories);
