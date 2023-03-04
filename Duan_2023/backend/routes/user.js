const authorController = require("../controllers/userControllers");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", authorController.addUser);
router.get("/", authorController.findUser);
module.exports = router;
