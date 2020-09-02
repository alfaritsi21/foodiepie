const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/index");

module.exports = {
  getProductByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getproductbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log("data ada di dalam redis !");
        return helper.response(response, 200, JSON.parse(result));
      } else {
        console.log("data tidak ada di dalam redis !");
        next();
      }
    });
  },
  // tambahkan get product yang ada pagination
  getProductByPagination: (request, response, next) => {
    const { page, limit, order, order_type } = request.query;
    client.get(
      `getproductbypagination-${page}-${limit}-${order}-${order_type}`,
      (error, result) => {
        if (!error && result != null) {
          console.log("data ada di dalam redis !");
          return helper.response(response, 200, JSON.parse(result));
        } else {
          console.log("data tidak ada di dalam redis !");
          next();
        }
      }
    );
  },
  clearDataProductIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.del(`getproductbyid:${id}`, (error, result) => {
      console.log(result);
    });
    next();
  },
  clearDataProductRedis: (request, response, next) => {
    client.flushall((error, result) => {
      console.log(result);
    });
    next();
  },
};