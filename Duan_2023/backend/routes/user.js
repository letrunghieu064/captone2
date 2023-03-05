const userController = require("../controllers/userControllers");
const authController = require("../controllers/authController");
const router = require("express").Router();

//ADD AUTHOR
router.post("/", userController.addUser);
router.post("/signup/", authController.signup);
router.post("/signin/", authController.signin);
router.get("/", userController.findUser);
module.exports = router;
