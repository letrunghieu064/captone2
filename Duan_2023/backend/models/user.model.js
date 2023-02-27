const mongooes = require("mongoose");
const userSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  birthday: {
    type: String,
  },
});
