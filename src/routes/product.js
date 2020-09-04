const router = require("express").Router();
const { authorization } = require("../middleware/auth");
const {
  getProductByIdRedis,
  clearDataProductIdRedis,
  clearDataRedis,
  getProductByPagination,
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
router.post("/", clearDataRedis, upload, postProduct);
router.post("/search", searchProductName);

// PATCH/ PUT
router.patch("/:id", clearDataProductIdRedis, upload, patchProduct);

// DELETE
router.delete("/:id", clearDataRedis, deleteProduct);

module.exports = router;
