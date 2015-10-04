var express = require('express');
var app = express();
app.use(require('connect-livereload')());
app.use(express.static(__dirname + '/../app/dist'));
app.use(express.static(__dirname + '/../app/dev'));
app.listen(4000);