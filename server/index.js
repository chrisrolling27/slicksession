const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');



app.use(express.json());





app.use(express.static('client/dist'));


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
