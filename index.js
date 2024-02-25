require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Books = require('./src/model/books');
const { favBooks } = require('./src/data/FavoriteBooks');
const bookRoutes = require('./src/routes/BookRoutes');

const port = process.env.PORT;
const MongoDbURL = process.env.DATABASE_URL;

// creating instance of express
const app = express();

app.use(cors({}));

// for parsing JSON data
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send("Welcome to ExpressAPI app");
});

const InitiateMongoDBConnection = async () => {
    try {
      // connecting to MongoDB
      mongoose.set('strictQuery',false);
      await mongoose.connect(MongoDbURL, {});
  
      mongoose.connection.once('open', () => console.log('DB connection successful'));
  
      const dataDount = await Books.countDocuments();
      if (dataDount === 0) {
        insertFavoriteBooks();
      }
    } catch (e) {
      mongoose.connection.on('error', (error) => console.log("Connection error", e));
      throw e;
    }
};
InitiateMongoDBConnection()

const insertFavoriteBooks = () => {
    Books.insertBooks(favBooks);
}

app.use('/books', bookRoutes);

// starts the server and listens on port
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})