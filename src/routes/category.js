const router = require("express").Router();
const { authorization, checkRole } = require("../middleware/auth");

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
  clearSpecificCategoryRedis,
} = require("../middleware/redis");

// category
// GET
router.get("/", authorization, getCategoryRedis, getAllCategory);
router.get("/:id", authorization, getCategoryByIdRedis, getCategoryById);

// POST
router.post(
  "/",
  authorization,
  checkRole,
  clearSpecificCategoryRedis,
  postCategory
);

// PATCH/ PUT
router.patch(
  "/:id",
  authorization,
  checkRole,
  clearDataCategoryIdRedis,
  patchCategory
);

// DELETE
router.delete(
  "/:id",
  authorization,
  checkRole,
  clearSpecificCategoryRedis,
  deleteCategory
);

module.exports = router;
