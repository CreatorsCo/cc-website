const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
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

var db_usrname;
var db_pass;

var db_usrnametwo;
var db_passtwo;

var authName;
var authPass;

//CORS Controll for HTTPS:// requests
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
app.use(express.static('client/build')); //Middleware
app.listen(port, () => console.log(`Listening on port ${port}`));

// CREATE SQL POOL METHOD SECURE AND DATABASE CONNECTION MUST ALWAYS BE RELEASED
var pool = mysql.createPool({
  connectionLimit: 100,
  host: 'eu-cdbr-west-02.cleardb.net',
  user: 'bfd21ca577ae43',
  password: 'aaf5d63d',                 //UPDATE TO NEW DATABASEr****
  port: '3306',
  database: 'heroku_a3965f3b046f3b3',
});


app.post('/api/add', (req, res) => {
  console.log('attempting to create a new user....');
  console.log(req.body.email);


  const query_Insert = "INSERT INTO register_early (email) VALUES(?)"

  pool.getConnection(function (err, connection) {
    if (!!err) {
      res.sendStatus(500);
      console.log('Error inserting new user... ' + err);
      connection.release();
    } else {
      connection.query(query_Insert, [req.body.email], function (err, result) {
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



app.get('/api/hangfire', (req, res) => {
  const readAuth = "SELECT * FROM auth_usrs"
  pool.getConnection(function (err, connection) {
    if (!!err) {
      res.sendStatus(500);
      console.log("Hangifre MYSQL error...");
      connection.release();
    } else {
      connection.query(readAuth, function (err, result) {
        console.log('Connnection successfull...');
        console.log('Query accepted...');
        db_usrname = result[0].username;
        db_pass = result[0].password;

        db_usrnametwo = result[1].username;
        db_passtwo = result[1].password;

        connection.release();
        console.log('Conn Pool released for re-use!!!');

      });
    }
  });
  res.sendFile(path.join(__dirname, './authentication', 'index.html'));
});

app.post('/authorize', (req, res) => {
  console.log('Authorizing user...');
  authName = req.body.authname;
  authPass = req.body.authpass;
  res.sendFile(path.join(__dirname, '../app', 'client', 'build', 'index.html'));
});



app.get("/api/databasecheck", (req, res) => {
  if (authName === db_usrname && authPass === db_pass || authName === db_usrnametwo && authPass === db_passtwo  ) {
    const query_ReadAll = "SELECT * FROM register_early"
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
  } else {
    console.log('USER NOT AUTHORIZED...')
    res.sendFile(path.join(__dirname, './authentication', 'failed.html'));

  }
});

//REPSONSE CHECK FOR LIVE SERVER
app.get('/api/responsecheck', (req, res) => {
  authName = "";
  authPass = "";
  console.log(authName + " & " + authPass)
  res.send({ express: 'SERVER IS ACTIVE!' });
});


// Catch all code which routes users back to homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});





process.on('SIGINT', () => { console.log("Bye bye!"); process.exit(); });
