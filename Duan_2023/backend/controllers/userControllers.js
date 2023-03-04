const { User } = require("../models/user.model.js");
// const db = require("../models/index");
const userController = {
  //ADD AUTHOR
  addUser: async (req, res) => {
    try {
      const newAuthor = new User(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json({ statusCode: 200, message: savedAuthor });
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },
  findUser: async (req, res) => {
    try {
      console.log("req", req.body);
      // const newUser = new User(req.body);

      const user = await User.findOne({ name: req.body.name });
      if (user) {
        console.log("user", user.name);
        res.status(200).send({ statusCode: 200, message: user });
      }

      // .then((user) => {
      //   if (user) {
      //     res.status(200).send({ statusCode: 200, message: user.name });
      //   }
      // })
      // .catch((error) => {
      //   res.status(404).send({ statusCode: 404, message: error.message });
      // });
    } catch (err) {
      res.status(500).send(err); //HTTP REQUEST CODE
    }
  },
};
module.exports = userController;
