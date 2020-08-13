const router = require("express").Router();
const { getAllHistory, getHistoryById, postHistory, patchHistory, deleteHistory } = require('../controller/history');



// history
// GET
router.get("/", getAllHistory);
router.get("/:id", getHistoryById);


// POST
router.post('/', postHistory);

// PATCH/ PUT
router.patch('/:id', patchHistory);

// DELETE
router.delete('/:id', deleteHistory);


module.exports = router;