const connection = require('../config/mysql');

module.exports = {
  getAllHistory: () => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM history`, (error, result) => {
        !error ? resolve(result) : reject(new Error((error)));
      })
    });
  },
  getHistoryById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM history WHERE history_id = ?",
        id,
        (error, result) => {
          !error ? resolve(result) : reject(new Error(error));
        }
      )
    });
  },
  postHistory: (setData) => {
    return new Promise((resolve, reject) => {
      connection.query("INSERT INTO history SET ?", setData, (error, result) => {
        // console.log(result)
        if (!error) {
          const newResult = {
            history_id: result.insertId,
            ...setData
          } 
          resolve(newResult);
        } else {
          reject(new Error(error));
          
        }
      })
    });
  },
  // sumOrder: (history_id) => {
  //   return new Promise((resolve, reject) => {
  //     connection.query(`SELECT SUM order_total FROM order WHERE history_id ?`, history_id, (error, result) => {
  //       !error ? resolve(result) : reject(new Error((error)));
  //     })
  //   });
  // },
  updateHistorySubtotal : (history_id) => {
    return new Promise((resolve, reject) => {
      connection.query("UPDATE history SET history_subtotal = ((SELECT SUM(order_total) FROM orders WHERE history_id = ?) + (SELECT SUM(ppn) FROM orders WHERE history_id = ?))  WHERE history_id = ?", [history_id, history_id, history_id], (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(new Error(error));
          
        }
      });
    })
  },
}