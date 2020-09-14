const {
  getAllCategory,
  getCategoryById,
  postCategory,
  patchCategory,
  deleteCategory,
} = require("../model/category");
const helper = require("../helper");
const redis = require("redis");
const client = redis.createClient();

module.exports = {
  getAllCategory: async (request, response) => {
    try {
      const result = await getAllCategory();
      client.set("getcategories", JSON.stringify(result));
      return helper.response(response, 200, "Success GET Category", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getCategoryById: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await getCategoryById(id);
      if (result.length > 0) {
        client.set(`getcategorybyid:${id}`, JSON.stringify(result));
        return helper.response(
          response,
          200,
          "Success Get Category by ID",
          result
        );
      } else {
        return helper.response(
          response,
          404,
          `Category By Id : ${id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  postCategory: async (request, response) => {
    try {
      const { category_name } = request.body;
      const setData = {
        category_name,
        category_created_at: new Date(),
        category_status: 1,
      };
      const result = await postCategory(setData);
      client.flushall((error, result) => {
        console.log(result);
      });
      return helper.response(response, 201, "Category Created", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },

  patchCategory: async (request, response) => {
    try {
      const { id } = request.params;
      const { category_name, category_status } = request.body;
      const setData = {
        category_name,
        category_updated_at: new Date(),
        category_status: 1,
      };
      const checkId = await getCategoryById(id);
      if (checkId.length > 0) {
        const result = await patchCategory(setData, id);
        client.flushall((error, result) => {
          console.log(result);
        });
        return helper.response(response, 201, "Category Updated", result);
      } else {
        return helper.response(
          response,
          404,
          `Category By Id : ${id} Not Found`
        );
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  deleteCategory: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteCategory(id);
      if (result) {
        return helper.response(response, 201, "Category Deleted", id);
      } else {
        return helper.response(response, 404, `Category : ${id} Not Found`);
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
};
