const express = require('express');

// creating instance of express
const app = express();

// for parsing JSON data
app.use(express.json());

// starts the server and listens on port 2000
app.listen(2000, () => {
    console.log(`Server Started at ${2000}`)
})