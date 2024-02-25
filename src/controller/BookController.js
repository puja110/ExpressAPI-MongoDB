const Book = require('../model/books');

/**
 * @description Controller function to list all books
 * @param {*} req - The request object
 * @param {*} res - The response object
 * @returns {JSON} - Returns all the saved books in the database
 */
const listAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  listAllBooks
};
