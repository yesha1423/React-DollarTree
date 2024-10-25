const express = require('express');
const cors = require('cors');
const connectToDB = require('./database');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

app.listen(port, () => {
  connectToDB()
    console.log(`Server is running on port ${port}`);
});
