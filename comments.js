// Create web Server
// Run server with: node comments.js
// Test with: http://localhost:3000/comments

var express = require('express');
var app = express();
var fs = require('fs');

app.get('/comments', function(req, res) {
  fs.readFile('comments.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(3000);
console.log('Server running at http://localhost:3000/comments');

