// express webapp framework
var express = require('express');
var app = express();

// for a database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/search.db');

// static files
app.use(express.static(__dirname + '/public'));

//routes
app.get('/search', function(request,response) {
    console.log("GET recieved at /search.");
});

app.post('/search', function(request,response) {
    console.log("POST recieved at /search.");
});

app.listen(8080, function() {
    console.log("Server is running on port 8080.");
});