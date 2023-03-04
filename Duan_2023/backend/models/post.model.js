const mongooes = require("mongoose");
const postSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
});
let Post = mongooes.model("Post", postSchema);
module.exports = { Post };
