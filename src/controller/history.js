const {
  getAllHistory,
  getHistoryById,
  postHistory,
  patchHistory,
  deleteHistory,
  sumOrder,
  updateHistorySubtotal,
  getTodayIncome,
  getCountOrder,
  getYearlyIncome,
} = require("../model/history");
const { getProductById } = require("../model/product");
const { getOrderByHistoryId } = require("../model/order");
const { postOrder } = require("../model/order");
const redis = require("redis");
const client = redis.createClient();

const helper = require("../helper");

module.exports = {
  getAllHistory: async (request, response) => {
    try {
      const result = await getAllHistory();
      let historyData = [];
      for (let index = 0; index < result.length; index++) {
        const history = {
          details: result[index],
          orders: await getOrderByHistoryId(result[index].history_id),
        };
        historyData = [...historyData, history];
      }
      client.set("gethistory", JSON.stringify(result));
      return helper.response(response, 200, "Success GET History", historyData);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getHistoryById: async (request, response) => {
    try {
      // const id = request.params.id
      const { id } = request.params;
      const result = await getHistoryById(id);
      if (result.length > 0) {
        client.set(`gethistorybyid:${id}`, JSON.stringify(result));
        return helper.response(
          response,
          200,
          "Success Get History by ID",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `History By Id : ${id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getTodayIncome: async (request, response) => {
    try {
      const date = request.body.date;
      const result = await getTodayIncome(date);
      console.log(date);
      return helper.response(response, 200, "Success GET History", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getYearIncome: async (request, response) => {
    try {
      const date = request.body.date;
      const result = await getYearlyIncome(date);
      console.log(date);
      return helper.response(response, 200, "Success GET History", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getDailyIncomeThisMonth: async (request, response) => {
    try {
      const today = request.body.date;
      let result = [];
      // loop
      for (let i = 30; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const date = d.toISOString().slice(0, 10);
        const income = await getTodayIncome(date);
        result = [...result, { date: date, income: income }];
      }
      // const result = await getTodayIncome(date)
      // console.log(date)
      return helper.response(response, 200, "Success GET History", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getCountOrder: async (request, response) => {
    try {
      const date = request.body.date;
      const result = await getCountOrder(date);
      return helper.response(response, 200, "Success GET History", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  postHistory: async (request, response) => {
    try {
      const {
        invoice,
        history_subtotal,
        history_status,
        orders,
      } = request.body;

      const setData = {
        invoice: invoice,
        history_subtotal: 0,
        history_created_at: new Date(),
        history_status: 1,
      };
      const history = await postHistory(setData);

      for (let i = 0; i < orders.length; i++) {
        const product = await getProductById(orders[i].product_id);
        let product_price = product[0].product_price;
        let order_total = product_price * orders[i].quantity;
        const setData = {
          product_id: orders[i].product_id,
          quantity: orders[i].quantity,
          order_status: 1,
          history_id: history.history_id,
          order_total: order_total,
          ppn: order_total / 10,
        };
        const result = await postOrder(setData);
      }
      const updateSubtotal = await updateHistorySubtotal(history.history_id);

      const updatedHistory = await getHistoryById(history.history_id);

      return helper.response(response, 201, "History Created", updatedHistory);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
