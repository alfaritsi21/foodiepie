const connection = require('../config/mysql');

module.exports = {
  getProduct: (limit, offset, order, order_type) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product ORDER BY ${order} ${order_type} LIMIT ? OFFSET ?`, [limit, offset], (error, result) => {
        !error ? resolve(result) : reject(new Error((error)));
      })
    });
  },
  getProductCount: () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT COUNT(*) as total FROM product", (error, result) => {
        !error ? resolve(result[0].total) : reject(new Error((error)));
      })
    })
  },
  
  // ==================================
  getProductById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM product WHERE product_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      )
    });
  },
  postProduct: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO product SET ?", setData, (error, result) => {
        if (!error) {
          const newResult = {
            product_id: result.insertId,
            ...setData
          } 
          resolve(newResult);
        } else {
          reject(new Error(error));
          
        }
      })
    });
  },
  searchProductName: (product_name) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM product WHERE product_name LIKE '${product_name}'`, (error, result) => {
        !error ? resolve(result) : reject(new Error((error)));
      })
    });
  },
  orderProduct: (product_name) => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM product ORDER ?", product_name, (error, result) => {
        !error ? resolve(result) : reject(new Error((error)));
      })
    });
  },
  patchProduct: (setData, id) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE product SET ? WHERE product_id = ?", [setData, id], (error, result) => {
        if (!error) {
          const newResult = {
            product_id: id,
            ...setData
          }
          resolve(newResult);
        } else {
          reject(new Error(error));
          
        }
      });
    })
  },
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE product SET product_status = 0 WHERE product_id = ?", id, (error, result) => {
        if (!error) {
          
          resolve(result.changedRows);
        } else {
          reject(new Error(error));
          
        }
      });
    });
  }
}
