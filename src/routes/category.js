const router = require("express").Router();
const {
  getAllCategory,
  getCategoryById,
  postCategory,
  patchCategory,
  deleteCategory,
} = require("../controller/category");
const {
  getCategoryRedis,
  getCategoryByIdRedis,
  clearDataCategoryIdRedis,
  clearDataRedis,
} = require("../middleware/redis");

// category
// GET
router.get("/", getCategoryRedis, getAllCategory);
router.get("/:id", getCategoryByIdRedis, getCategoryById);

// POST
router.post("/", clearDataRedis, postCategory);

// PATCH/ PUT
router.patch("/:id", clearDataCategoryIdRedis, patchCategory);

// DELETE
router.delete("/:id", clearDataRedis, deleteCategory);

module.exports = router;
