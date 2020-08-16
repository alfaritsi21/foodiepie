const { getAllHistory, getHistoryById, postHistory, patchHistory, deleteHistory, sumOrder, updateHistorySubtotal } = require("../model/history");
const { getProductById } = require("../model/product");
const { postOrder } = require("../model/order")

const helper = require("../helper");

module.exports = {
  getAllHistory: async (request, response) => {
    try {
      const result = await getAllHistory();
      return helper.response(response, 200, "Success GET History", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getHistoryById: async (request, response) => {
    try {
      // const id = request.params.id
      const {id} = request.params;
      const result = await getHistoryById(id);
      if(result.length > 0) {
        return helper.response(response, 200, "Success Get History by ID", result)

      } else {
        return helper.response(response, 404, `History By Id : ${id} Not Found`)
        
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)

    }
  },
  postHistory: async (request, response) => {
    try {
    const { invoice, history_subtotal, history_status, orders } = request.body;

    const setData = {
      invoice : "ARQ-" + Math.floor(Math.random() * 5000)*250,
      history_subtotal: 0,
      history_created_at: new Date(),
      history_status: 1
    }
      const history = await postHistory(setData);

      for(let i =0; i< orders.length; i++)  {
        const product = await getProductById(orders[i].product_id);
        let product_price = product[0].product_price;
        let order_total = product_price * orders[i].quantity;
        const setData = {
            product_id: orders[i].product_id,
            quantity: orders[i].quantity,
            order_status: 1,
            history_id: history.history_id,
            order_total: order_total,
            ppn: order_total / 10
          }
          const result = await postOrder(setData);
      }; 
    const updateSubtotal = await updateHistorySubtotal(history.history_id)

    const updatedHistory = await getHistoryById(history.history_id)

      return helper.response(response, 201, "History Created", updatedHistory)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
    }
  }
};
