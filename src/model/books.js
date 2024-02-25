const mongoose = require('mongoose');

// define the Books schema
const BooksSchema = new mongoose.Schema({
  booksName: { 
    type: String, 
    required: true 
  },
  isbn: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true 
  },
  author: { 
    type: String, 
    required: true 
  },
  genre: { 
    type: String, 
    required: true 
  },
},{timestamps:true});

// define a static method
BooksSchema.statics.insertBooks = async function (booksDataList) {
  try {
    // Use the create() method to insert the list of book data
    const insertedData = await this.create(booksDataList);
    console.log('Data inserted successfully:', insertedData);
    return insertedData;
  } catch (error) {
    console.error('Error inserting data:', error);
    throw error;
  }
};

// creating and exporting a mongoose schema
module.exports = mongoose.model('Books', BooksSchema);
