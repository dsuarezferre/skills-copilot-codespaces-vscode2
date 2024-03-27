// Create Web Server with Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'data/comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/comments', function(req, res) {
    fs.readFile(commentsPath, function(err, data) {
        var comments = JSON.parse(data);
        var newComment = {
            id: Date.now(),
        };
        // Rest of the code...
    });
});



