var express = require('express');
var path = require('path');

//creates the express appliction
var app = express();

var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));

app.listen(8083);

console.log('Listening in port 8083');