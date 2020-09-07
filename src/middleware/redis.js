const redis = require("redis");
const client = redis.createClient();
const helper = require("../helper/index");

module.exports = {
  getProductByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getproductbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log("data taken from redis !");
        return helper.response(
          response,
          200,
          "Success Get Product by ID",
          JSON.parse(result)
        );
      } else {
        console.log("no data saved from redis !");
        next();
      }
    });
  },
  // tambahkan get product yang ada pagination
  getProductByPagination: (request, response, next) => {
    client.get(
      `getproductbypagination:${JSON.stringify(request.query)}`,
      (error, result) => {
        const newResult = JSON.parse(result);
        if (!error && result != null) {
          console.log("data taken from redis !");
          result = JSON.parse(result);
          return helper.response(
            response,
            200,
            "Success GET Product",
            result.result,
            result.pageInfo
          );
        } else {
          console.log("no data saved from redis !");
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

  clearSpecificPaginationRedis: (request, response, next) => {
    client.keys("getproduct*", (err, keys) => {
      if (keys.length > 0) {
        keys.forEach((value) => {
          client.del(value);
        });
      }
      next();
    });
  },

  // CATEGORY
  getCategoryRedis: (request, response, next) => {
    client.get("getcategories", (error, result) => {
      if (!error && result != null) {
        console.log("Data taken from redis !");
        return helper.response(
          response,
          200,
          "Success Get Category",
          JSON.parse(result)
        );
      } else {
        console.log("No data saved from redis !");
        next();
      }
    });
  },
  getCategoryByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getcategorybyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log("Data taken from redis !");
        return helper.response(
          response,
          200,
          "Success Get Category by ID",
          JSON.parse(result)
        );
      } else {
        console.log("No data saved from redis !");
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

  clearSpecificCategoryRedis: (request, response, next) => {
    client.keys("getcategor*", (err, keys) => {
      if (keys.length > 0) {
        keys.forEach((value) => {
          client.del(value);
        });
      }
      next();
    });
  },

  // ORDER
  getOrderRedis: (request, response, next) => {
    client.get("getorder", (error, result) => {
      if (!error && result != null) {
        console.log("Data taken from redis !");
        return helper.response(
          response,
          200,
          "Success Get Order",
          JSON.parse(result)
        );
      } else {
        console.log("No data saved from redis !");
        next();
      }
    });
  },
  getOrderByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`getorderbyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log("Data taken from redis !");
        return helper.response(
          response,
          200,
          "Success Get Order by ID",
          JSON.parse(result)
        );
      } else {
        console.log("No data saved from redis !");
        next();
      }
    });
  },

  // HISTORY
  getHistoryRedis: (request, response, next) => {
    client.get("gethistory", (error, result) => {
      if (!error && result != null) {
        console.log("Data taken from redis !");
        return helper.response(
          response,
          200,
          "Success Get History",
          JSON.parse(result)
        );
      } else {
        console.log("No data saved from redis !");
        next();
      }
    });
  },
  getHistoryByIdRedis: (request, response, next) => {
    const { id } = request.params;
    client.get(`gethistorybyid:${id}`, (error, result) => {
      if (!error && result != null) {
        console.log("Data taken from redis !");
        return helper.response(
          response,
          200,
          "Success Get History by ID",
          JSON.parse(result)
        );
      } else {
        console.log("No data saved from redis !");
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

  // clearSpecificPaginationRedis: (request, response, next) => {
  //   client.keys("getproduct*", (err, keys) => {
  //     if (keys.length > 0) {
  //       keys.forEach((value) => {
  //         client.del(value);
  //       });
  //     }
  //   });
  // },
};
