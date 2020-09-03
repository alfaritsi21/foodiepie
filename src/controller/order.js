const {
  getAllOrder,
  getOrderById,
  postOrder,
  getProductPrice,
} = require("../model/order");
const helper = require("../helper");
const { getProductById } = require("../model/product");
const redis = require("redis");
const client = redis.createClient();

module.exports = {
  getAllOrder: async (request, response) => {
    try {
      const result = await getAllOrder();
      client.set("getorder", JSON.stringify(result));
      return helper.response(response, 200, "Success GET Order", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getOrderById: async (request, response) => {
    try {
      // const id = request.params.id
      const { id } = request.params;
      const result = await getOrderById(id);
      if (result.length > 0) {
        client.set(`getorderbyid:${id}`, JSON.stringify(result));

        return helper.response(
          response,
          200,
          "Success Get Order by ID",
          result
        );
      } else {
        return helper.response(response, 404, `Order By Id : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  // postOrder: async (request, response) => {
  //   try {

  //   const { product_id, quantity, order_status } = request.body;

  //   // const product = await getProductById(product_id);
  //   // let product_price = product[0].product_price;
  //   // helper.response(response, 201, "Order Created", )
  //   // let totalProductPrice = await getProductPrice(product_id)
  //   const setData = {
  //     product_id,
  //     quantity,
  //     order_created_at: new Date(),
  //     history_id: 1,
  //     ppn: 1000,
  //     order_total: 3000,
  //     order_status
  //   }
  //     const result = await postOrder(setData);
  //     console.log(setData);
  //     return helper.response(response, 201, "Order Created", result)
  //   } catch (error) {
  //     return helper.response(response, 400, "Bad Request", error)
  //   }

  // }
};
