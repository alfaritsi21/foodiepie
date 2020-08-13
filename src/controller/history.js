const { getAllHistory, getHistoryById, postHistory, patchHistory, deleteHistory } = require("../model/history");
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
    const { invoice, history_subtotal, history_status } = request.body;
    const setData = {
      invoice,
      history_subtotal,
      history_created_at: new Date(),
      history_status
    }
      const result = await postHistory(setData);
      console.log(setData);
      return helper.response(response, 201, "History Created", result)
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
      
    }
    
  },

  patchHistory: async (request, response) => {
    try {
      const { id } = request.params;
      const { invoice, history_subtotal, history_status } = request.body;
      
      const checkId = await getHistoryById(id);
      console.log(checkId);
      
      if (checkId.length > 0) {
        const setData = {
          invoice : invoice ? invoice : checkId[0].invoice,
          history_subtotal : history_subtotal ? history_subtotal : checkId[0].history_subtotal, 
          history_updated_at: new Date(),
          history_status : history_status ? history_status : checkId[0].history_status
        }
        const result = await patchHistory(setData, id);
        return helper.response(response, 201, "History Updated", result)
      
      } else {
        return helper.response(response, 404, `History By Id : ${id} Not Found`)
        
      }
      
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
      
    }
    
  },
  deleteHistory: async (request, response) => {
    try {
      const { id } = request.params;
      const result = await deleteHistory(id);
      console.log(result)
      return helper.response(response, 201, "History Deleted", result)

      
    } catch (error) {
      return helper.response(response, 400, "Bad Request", error)
      
    }
  },
};
