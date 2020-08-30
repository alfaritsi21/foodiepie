const router = require('express').Router()
const {
  getAllHistory,
  getHistoryById,
  postHistory,
  getTodayIncome,
  getCountOrder,
  getDailyIncomeThisMonth,
  getYearIncome
} = require('../controller/history')

// history
// GET
router.get('/', getAllHistory)
router.get('/:id', getHistoryById)
router.post('/count/order', getCountOrder)

// POST
router.post('/', postHistory)
router.post('/income/today', getTodayIncome)
router.post('/income/month', getDailyIncomeThisMonth)
router.post('/income/year', getYearIncome)

// // PATCH/ PUT
// router.patch('/:id', patchHistory);

// // DELETE
// router.delete('/:id', deleteHistory);

module.exports = router
