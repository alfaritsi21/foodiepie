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

  // CATEGORY
  getCategoryRedis: (request, response, next) => {
    client.get("getcategory", (error, result) => {
      if (!error && result != null) {
        console.log("data ada di dalam redis !");
        return helper.response(response, 200, JSON.parse(result));
      } else {
        console.log("data tidak ada di dalam redis !");
        next();
      }
    });
  },
  getCategoryByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getcategorybyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log("data ada di dalam redis !");
        return helper.response(response, 200, JSON.parse(result));
      } else {
        console.log("data tidak ada di dalam redis !");
        next();
      }
    });
  },
  clearDataCategoryIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.del(`getcategorybyid:${id}`, (error, result) => {
      console.log(result);
    });
    next();
  },

  // ORDER
  getOrderRedis: (request, response, next) => {
    client.get("getorder", (error, result) => {
      if (!error && result != null) {
        console.log("data ada di dalam redis !");
        return helper.response(response, 200, JSON.parse(result));
      } else {
        console.log("data tidak ada di dalam redis !");
        next();
      }
    });
  },
  getOrderByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getorderbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log("data ada di dalam redis !");
        return helper.response(response, 200, JSON.parse(result));
      } else {
        console.log("data tidak ada di dalam redis !");
        next();
      }
    });
  },

  clearDataRedis: (request, response, next) => {
    client.flushall((error, result) => {
      console.log(result);
    });
    next();
  },
};
