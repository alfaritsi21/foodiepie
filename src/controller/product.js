const {
  getProduct,
  getProductCount,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
  searchProductName,
  orderProduct,
} = require("../model/product");
const qs = require("querystring");
const helper = require("../helper");
const redis = require("redis");
const client = redis.createClient();

const getPrevLink = (page, currentQuery) => {
  if (page > 1) {
    const generatedPage = {
      page: page - 1,
    };
    const resultPrevLink = { ...currentQuery, ...generatedPage };
    return qs.stringify(resultPrevLink);
  } else {
    return null;
  }
};

const getNextLink = (page, totalPage, currentQuery) => {
  if (page < totalPage) {
    const generatedPage = {
      page: page + 1,
    };
    const resultNextLink = { ...currentQuery, ...generatedPage };
    return qs.stringify(resultNextLink);
  } else {
    return null;
  }
};

module.exports = {
  getAllProduct: async (request, response) => {
    let { page, limit, order, order_type } = request.query;
    page = parseInt(page);
    limit = parseInt(limit);
    let totalData = await getProductCount();
    let totalPage = Math.ceil(totalData / limit);
    let offset = page * limit - limit;
    let prevLink = getPrevLink(page, request.query);
    let nextLink = getNextLink(page, totalPage, request.query);

    const pageInfo = {
      page,
      totalPage,
      limit,
      totalData,
      prevLink: prevLink && `http://127.0.0.1:3001/product?${prevLink}`,
      nextLink: nextLink && `http://127.0.0.1:3001/product?${nextLink}`,
    };
    try {
      const result = await getProduct(limit, offset, order, order_type);
      // prosesset data result ke dalam redis
      client.setex(
        `getproductbypagination-${page}-${limit}-${order}-${order_type}`,
        3600,
        JSON.stringify(result)
      );
      return helper.response(
        response,
        200,
        "Success GET Product",
        result,
        pageInfo
      );
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getProductById: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getProductById(id);
      if (result.length > 0) {
        client.set(`getproductbyid:${id}`, JSON.stringify(result));

        return helper.response(
          response,
          200,
          "Success Get Product by ID",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `Product By Id : ${id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  postProduct: async (request, response) => {
    try {
      // console.log(request.file);
      const {
        product_name,
        product_price,
        category_id,
        product_status,
      } = request.body;
      const setData = {
        product_name,
        product_price,
        category_id,
        product_image: request.file === undefined ? "" : request.file.filename,
        product_created_at: new Date(),
        product_status,
      };
      const result = await postProduct(setData);
      // console.log(setData)
      return helper.response(response, 201, "Product Created", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  searchProductName: async (request, response) => {
    try {
      const { product_name } = request.body;
      const result = await searchProductName(product_name);
      // console.log(result)

      if (result.length > 0) {
        return helper.response(
          response,
          200,
          "Success Get Product by ID",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `Product By Id : ${product_name} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  orderProduct: async (request, response) => {
    try {
      const { product_name } = request.body;
      const result = await searchProductName(product_name);
      // console.log(result)

      if (result.length > 0) {
        return helper.response(
          response,
          200,
          "Success Get Product by ID",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `Product By Id : ${product_name} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  patchProduct: async (request, response) => {
    try {
      const { id } = request.params;
      const {
        product_name,
        product_price,
        category_id,
        product_image,
        product_status,
      } = request.body;

      const checkId = await getProductById(id);
      // console.log(checkId);

      if (checkId.length > 0) {
        const setData = {
          product_name: product_name ? product_name : checkId[0].product_name,
          product_price: product_price
            ? product_price
            : checkId[0].product_price,
          category_id: category_id ? category_id : checkId[0].category_id,
          product_image:
            request.file === undefined ? "" : request.file.filename,
          product_updated_at: new Date(),
          product_status: product_status
            ? product_status
            : checkId[0].product_status,
        };
        const result = await patchProduct(setData, id);
        client.set(`getproductbyid:${id}`, JSON.stringify(result));
        return helper.response(response, 201, "Product Updated", result);
      } else {
        return helper.response(
          response,
          404,
          `Product By Id : ${id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  deleteProduct: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteProduct(id);
      // console.log(result)
      if (result) {
        return helper.response(response, 201, "Product Deleted", id);
      } else {
        return helper.response(response, 404, `Category : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
