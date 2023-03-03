const authorController = require("../controllers/userControllers");

const router = require("express").Router();

//ADD AUTHOR
router.post("/", authorController.addUser);
module.exports = router;
