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
