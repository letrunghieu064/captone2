const { User } = require("../models/user.model.js");
const userController = {
  //ADD AUTHOR
  addUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const savedAuthor = await newUser.save();
      res.status(200).json(savedAuthor);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },
};
module.exports = userController;
