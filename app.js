var express = require('express');
var browserSync = require('browser-sync');
var bodyParser = require("body-parser");
var router = require("/router.js");

var app = express();

app.use(express.static("client"));
var bs = browserSync.create();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("./public"));
app.use("/api", router);
app.use("*", function(req, res) {
    res.send("Resource not found (404).");
});

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
