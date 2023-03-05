const mongooes = require("mongoose");
const productSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
});
let Product = mongooes.model("Product", productSchema);
module.exports = { Product };
