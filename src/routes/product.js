const router = require("express").Router();
const { getAllProduct, getProductById, postProduct, patchProduct, deleteProduct, searchProductName, orderProduct } = require('../controller/product');

// GET
router.get("/", getAllProduct);
router.get("/:id", getProductById);


// POST
router.post('/', postProduct);
router.post('/search', searchProductName);
router.post('/order', orderProduct)


// PATCH/ PUT
router.patch('/:id', patchProduct);

// DELETE
router.delete('/:id', deleteProduct);



module.exports = router;