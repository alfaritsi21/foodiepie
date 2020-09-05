const router = require("express").Router();
const { authorization, checkRole } = require("../middleware/auth");
const {
  getProductByIdRedis,
  clearDataProductIdRedis,
  clearDataRedis,
  getProductByPagination,
  clearSpecificPaginationRedis,
} = require("../middleware/redis");
const {
  getAllProduct,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
  searchProductName,
  orderProduct,
} = require("../controller/product");
const upload = require("../middleware/multer");

// GET

router.get("/", authorization, getProductByPagination, getAllProduct);
router.get("/:id", authorization, getProductByIdRedis, getProductById);

// POST
router.post(
  "/",
  authorization,
  clearSpecificPaginationRedis,
  upload,
  postProduct
);
router.post("/search", authorization, searchProductName);

// PATCH/ PUT
router.patch(
  "/:id",
  authorization,
  checkRole,
  clearDataProductIdRedis,
  upload,
  patchProduct
);

// DELETE
router.delete(
  "/:id",
  authorization,
  checkRole,
  clearSpecificPaginationRedis,
  deleteProduct
);

module.exports = router;
