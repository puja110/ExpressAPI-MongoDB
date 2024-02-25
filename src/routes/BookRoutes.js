const express = require('express');
const router = express.Router();
const bookController = require('../controller/BookController.js');

/**
 * @description Route to handle GET request for fetching all books
 */
router.get('/', bookController.listAllBooks);

module.exports = router;