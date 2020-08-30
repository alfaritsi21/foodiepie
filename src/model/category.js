const connection = require('../config/mysql')

module.exports = {
  getAllCategory: () => {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM category WHERE category_status = 1`,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  getCategoryById: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM category WHERE category_id = ?',
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error))
        }
      )
    })
  },
  postCategory: setData => {
    return new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO category SET ?',
        setData,
        (error, result) => {
          console.log(result)
          if (!error) {
            const newResult = {
              category_id: result.insertId,
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
  patchCategory: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE category SET ? WHERE category_id = ?',
        [setData, id],
        (error, result) => {
          if (!error) {
            const newResult = {
              category_id: id,
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
  deleteCategory: id => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE category SET category_status = 0 WHERE category_id = ?',
        id,
        (error, result) => {
          if (!error) {
            resolve(result.changedRows)
          } else {
            reject(new Error(error))
          }
        }
      )
    })
  }
}
