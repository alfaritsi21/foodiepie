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

router.get("/", authorization, getCategoryRedis, getAllCategory);
router.get("/:id", authorization, getCategoryByIdRedis, getCategoryById);

router.post(
  "/",
  authorization,
  checkRole,
  clearSpecificCategoryRedis,
  postCategory
);

router.patch(
  "/:id",
  authorization,
  checkRole,
  clearDataCategoryIdRedis,
  patchCategory
);

router.delete(
  "/:id",
  authorization,
  checkRole,
  clearSpecificCategoryRedis,
  deleteCategory
);

module.exports = router;
