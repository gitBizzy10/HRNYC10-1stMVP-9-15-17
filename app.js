//rq express
var express = require('express');
//rq router
var router = require('./server/routes.js');
//rq db
var db = require('./server/db/db.js');
var parser = require('body-parser');

//use express methods with app
var app = express();

//app will use everything from router export
app.use(parser.json())
app.use(router)

//serve up files in public
app.use(express.static('../public'))

//instruct app to listen on port 3000
app.listen(3000);
console.log('Listening on port 3000...')
