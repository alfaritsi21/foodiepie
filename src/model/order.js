const connection = require('../config/mysql')

module.exports = {
  getAllOrder: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM orders`, (error, result) => {
        !error ? resolve(result) : reject(new Error(error))
      })
    })
  },
  getOrderById: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM orders WHERE history_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getOrderByHistoryId: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM orders LEFT JOIN product on orders.product_id = product.product_id WHERE history_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },

  getProductPrice: product_id => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT product_price FROM product', (error, result) => {
        !error ? resolve(result[product_id]) : reject(new Error(error))
      })
    })
  },

  postOrder: setData => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO orders SET ?', setData, (error, result) => {
        if (!error) {
          const newResult = {
            order_id: result.insertId,
            ...setData
          }
          resolve(newResult)
        } else {
          reject(new Error(error))
        }
      })
    })
  }
}
