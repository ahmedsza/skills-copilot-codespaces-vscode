// create web server
// create a route for comments

// http://localhost:3000/comments

var express = require('express');
var app = express();

app.get('/comments', function(req, res){
  res.send('This is the comments page');
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});