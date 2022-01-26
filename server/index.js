const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const db = require('../database/connection.js');

app.use(express.json());

app.use(express.static('client/dist'));

db.connect((err) => {
  if (!err) {
    console.log('Connected to slicksession database');
  } else {
    console.log(err);
  }
})




app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
