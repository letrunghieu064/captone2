const mongooes = require("mongoose");
const userSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});
let User = mongooes.model("User", userSchema);
module.exports = { User };
