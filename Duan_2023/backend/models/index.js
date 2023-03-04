User = require("./user.model");
Post = require("./post.model");
Product = require("./product.model");
const db = {};
db.User = User;
db.Post = Post;
db.Product = Product;
module.exports = { db };
