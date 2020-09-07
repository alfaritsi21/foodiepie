const router = require("express").Router();
const { getAllOrder, getOrderById, postOrder } = require("../controller/order");
const { getOrderRedis, getOrderByIdRedis } = require("../middleware/redis");
const { authorization, checkRole } = require("../middleware/auth");

router.get("/", authorization, getOrderRedis, getAllOrder);
router.get("/:id", authorization, getOrderByIdRedis, getOrderById);

module.exports = router;
