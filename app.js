var express = require('express');
var browserSync = require('browser-sync');

var app = express();

app.use(express.static("client"));
var bs = browserSync.create();

bs.init({
  proxy:"localhost:3000",
  files: ["client/**"]
});

app.listen(3000, function(){
  console.log("Server app started on PORT 3000");
});
