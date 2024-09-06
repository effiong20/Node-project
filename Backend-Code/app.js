const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const bookRoutes = require('./routes/books');
const db = require('./db'); 

const app = express();
app.use(bodyParser.json());

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
