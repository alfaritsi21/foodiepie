const router = require("express").Router();
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

// history
// GET
router.get("/", getHistoryRedis, getAllHistory);
router.get("/:id", getHistoryByIdRedis, getHistoryById);
router.post("/count/order", getCountOrder);

// POST
router.post("/", postHistory);
router.post("/income/today", getTodayIncome);
router.post("/income/month", getDailyIncomeThisMonth);
router.post("/income/year", getYearIncome);

// // PATCH/ PUT
// router.patch('/:id', patchHistory);

// // DELETE
// router.delete('/:id', deleteHistory);

module.exports = router;
