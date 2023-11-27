const express = require('express');
const router = express.Router();
const {index,show,store,update, delete: destroy}= require('../../controllers/apiGenresController');
// /api/v1/genres
router
    .get('/',index)
    .get('/:id',show)
module.exports = router;