const router = require("express").Router();
const { getAllOrder, getOrderById, postOrder } = require("../controller/order");
const { getOrderRedis, getOrderByIdRedis } = require("../middleware/redis");
const { authorization, checkRole } = require("../middleware/auth");

// GET
router.get("/", authorization, getOrderRedis, getAllOrder);
router.get("/:id", authorization, getOrderByIdRedis, getOrderById);

// // // POST
// router.post('/', postOrder);

module.exports = router;
