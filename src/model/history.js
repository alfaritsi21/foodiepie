const connection = require('../config/mysql')

module.exports = {
  getAllHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM history WHERE history_status = 1`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getHistoryById: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM history WHERE history_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getTodayIncome: date => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT SUM(history_subtotal) as daily_income, DATE(history_created_at) as date FROM history WHERE DATE(history_created_at) = "${date}" AND history_status = 1 GROUP BY DATE(history_created_at)`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getYearlyIncome: date => {
    const d = new Date(date)
    d.setDate(d.getDate() - 365)
    const startDate = d.toISOString().slice(0, 10)
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT SUM(history_subtotal) as yearly_income FROM history WHERE DATE(history_created_at) > "${startDate}" AND DATE(history_created_at) <= "${date}" AND history_status = 1`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getCountOrder: date => {
    const d = new Date(date)
    d.setDate(d.getDate() - 7)
    const startDate = d.toISOString().slice(0, 10)
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT COUNT(history_id) as count_order FROM history WHERE DATE(history_created_at) > "${startDate}" AND DATE(history_created_at) <= "${date}" AND history_status = 1`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  postHistory: setData => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO history SET ?',
        setData,
        (error, result) => {
          // console.log(result)
          if (!error) {
            const newResult = {
              history_id: result.insertId,
              ...setData
            }
            resolve(newResult)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  },
  updateHistorySubtotal: history_id => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE history SET history_subtotal = ((SELECT SUM(order_total) FROM orders WHERE history_id = ?) + (SELECT SUM(ppn) FROM orders WHERE history_id = ?))  WHERE history_id = ?',
        [history_id, history_id, history_id],
        (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}
