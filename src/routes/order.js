const router = require("express").Router();
const { getAllOrder, getOrderById, postOrder } = require("../controller/order");
const { getOrderRedis, getOrderByIdRedis } = require("../middleware/redis");

// GET
router.get("/", getOrderRedis, getAllOrder);
router.get("/:id", getOrderByIdRedis, getOrderById);

// // // POST
// router.post('/', postOrder);

module.exports = router;
