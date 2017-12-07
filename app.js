var express = require('express');
var browserSync = require('browser-sync');
var bodyParser = require("body-parser");
//var router = require("/router.js");
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/3000');
var fs = require('fs');
const app = express();
let db = mongoose.connection;

//Check connection
db.once('open', function(){
  console.log('Connected to Mongodb');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});

let User = require('./model/user');


//Home
app.get('/',function(req, res){
  User.find({}, function(err, users){
  if(err){
    console.log(err);
  } else{
    res.render('index', {
       title: 'Users'
    });
  }
  });
});

app.post('/index/add', function(req,res){
  let user = new User();
  user.firstName = req.body.firstName;
  console.log('Submitted');
  return;
});


app.use(express.static("client"));
var bs = browserSync.create();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./public"));
//app.use("/api", router);
app.use("*", function(req, res) {
    res.send("Resource not found (404).");
});


app.get('/users', function(req,res){
  mongoose.model('users').find(function(err,users){
      res.send(users);
  });
});

app.get('/posts', function(req,res){
  mongoose.model('posts').find(function(err,posts){
    res.send(posts);
  });
});

app

app.listen(3000, function() {
    console.log("Server started at PORT 3000");
});

bs.init({
  proxy:"localhost:3000",
  files: ["client/**"]
});

app.listen(3000, function(){
  console.log("Server app started on PORT 3000");
});
