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

//separate concerns into MVC

app.post('/session', (req, res) => {
  let querystring = `INSERT INTO sessions (text) VALUES ("${req.body.text}")`;
  console.log(querystring);
  db.query(querystring, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('posted successfully')
      res.status(201).send(results);
    }
  })
})


//AppEditor post
app.post('/Richpost', (req, res) => {
 // let querystring = `INSERT INTO sessions (text) VALUES ("${req.body.text}")`;
  console.log(req.body.text);
  // db.query(querystring, (err, results) => {
  //   if (err) {
  //     res.status(500).send(err);
  //   } else {
  //     console.log('posted successfully')
  //     res.status(201).send(results);
  //   }
  // })
})


app.get('/sessions', (req, res) => {
  let querystring = 'SELECT * FROM sessions';
  console.log(querystring)
  db.query(querystring, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  })
})


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
