const router = require("express").Router();
const { authorization, checkRole } = require("../middleware/auth");

const {
  getAllHistory,
  getHistoryById,
  postHistory,
  getTodayIncome,
  getCountOrder,
  getDailyIncomeThisMonth,
  getYearIncome,
} = require("../controller/history");
const { getHistoryRedis, getHistoryByIdRedis } = require("../middleware/redis");

router.get("/", authorization, getHistoryRedis, getAllHistory);
router.get("/:id", authorization, getHistoryByIdRedis, getHistoryById);
router.post("/count/order", authorization, getCountOrder);

router.post("/", postHistory);
router.post("/income/today", authorization, getTodayIncome);
router.post("/income/month", authorization, getDailyIncomeThisMonth);
router.post("/income/year", authorization, getYearIncome);

module.exports = router;
