const { getAllProduct, getProductById, postProduct, patchProduct, deleteProduct } = require("../model/product");
const helper = require("../helper");

module.exports = {
  getAllProduct: async (request, response) => {
    try {
      const result = await getAllProduct();
      return helper.response(response, 200, "Success GET Product", result);
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error);
    }
  },
  getProductById: async (request, response) => {
    try {
      // const id = request.params.id
      const {id} = request.params;
      const result = await getProductById(id);
      if(result.length > 0) {
        return helper.response(response, 200, "Success Get Product by ID", result)

      } else {
        return helper.response(response, 404, `Product By Id : ${id} Not Found`)
        
      }
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)

    }
  },
  postProduct: async (request, response) => {
    try {
    const {product_name, product_price, category_id, product_status} = request.body;
    const setData = {
      product_name,
      product_price,
      category_id,
      product_created_at: new Date(),
      product_status
    }
      const result = await postProduct(setData);
      console.log(setData)
      return helper.response(response, 201, "Product Created", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
      
    }
    
  },

  patchProduct: async (request, response) => {
    try {
      const { id } = request.params;
      const { product_name, product_price, category_id, product_status } = request.body;
      
      const checkId = await getProductById(id);
      console.log(checkId);
      
      if (checkId.length > 0) {
        const setData = {
          product_name : product_name ? product_name : checkId[0].product_name,
          product_price : product_price ? product_price : checkId[0].product_price, 
          category_id : category_id ? category_id : checkId[0].category_id,
          product_updated_at: new Date(),
          product_status : product_status ? product_status : checkId[0].product_status
        }
        const result = await patchProduct(setData, id);
        return helper.response(response, 201, "Product Updated", result)
      
      } else {
        return helper.response(response, 404, `Product By Id : ${id} Not Found`)
        
      }
      
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
      
    }
    
  },
  deleteProduct: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteProduct(id);
      console.log(result)
      return helper.response(response, 201, "Product Deleted", result)

      
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
      
    }
  },
};
