const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
var http = require('http');
var https = require('https');
var fs = require('fs');
var utils = require('util');
var mysql = require('mysql');
require("dotenv").config;


const app = express();
var host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 5000;    //Run app on whatever port is live have or run my port 5000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('short'));

//CORS Controll for HTTPS:// requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.static('client/build')); //Middleware
app.listen(port, () => console.log(`Listening on port ${port}`));

var pool = mysql.createPool({
  connectionLimit: 100,
  host: 'us-cdbr-iron-east-02.cleardb.net',
  user: 'b4b4afbc10b55e',
  password: '83cf1c87',                 //UPDATE TO NEW DATABASEr****
  port: '3306',
  database: 'heroku_d4f17cbece4a437',
}); 


app.get('/api/responsecheck', (req, res) => {
  res.send({ express: 'SERVER IS ACTIVE!' });
});

app.post('/api/add', (req, res) => {
  console.log('attempting to create a new user....');

  console.log(req.body.usrname);
  console.log(req.body.email);


  const query_Insert = "INSERT INTO register_usr (name, email) VALUES(?, ?)"

  pool.getConnection(function (err, connection) {
    if (!!err) {
      res.sendStatus(500);
      console.log('Error inserting new user... ' + err);
      connection.release();
    } else {
      connection.query(query_Insert, [req.body.usrname, req.body.email], function (err, result) {
        if (!!err) {
          console.log('Error inserting new user...' + err);
          res.sendStatus(500);
          connection.release();
          console.log('Conn Pool released for re-use!!!');

        } else {
          console.log('New user has successfully been inserted to DB: ', result.insertedId);
          connection.release();
          console.log('Conn Pool released for re-use!!!');
        }
      });
    }
  });
});

app.get("/api/databasecheck", (req, res) => {
  const query_ReadAll = "SELECT * FROM register_usr"
  pool.getConnection(function (err, connection) {
    if (!!err) {
      res.sendStatus(500);
      console.log("Could not retrieve database results");
      connection.release();
    } else {
      connection.query(query_ReadAll, function (err, result) {
        console.log('Connnection successfull...');
        console.log('Query accepted...');
        res.send(result);
        connection.release();
        console.log('Conn Pool released for re-use!!!');

      });
    }
  });
});


// Catch all code which routes users back to homepage
app.get('*', (req, res) => {
  res.send(path.join(__dirname, 'client', 'build', 'index.html '));
});



process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
