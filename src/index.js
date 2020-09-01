const route = require("express").Router();

// import route disini
const product = require("./routes/product");
const category = require("./routes/category");
const history = require("./routes/history");
const order = require("./routes/order");
const users = require("./routes/users");

//buat middle disini
route.use("/product", product);
route.use("/category", category);
route.use("/history", history);
route.use("/order", order);
route.use("/users", users);

module.exports = route;
