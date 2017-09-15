//require in express; call .Router() on it
var router = require('express').Router();
//require in controllers
var controllers = require('./controllers/controllers.js')
//require in anything else needed

//uses express method 'get' to call get function in /controllers/controllers.js
router.get('/1', controllers.controllers.get)

//uses express method 'post' to call post function from /controllers/controllers.js
router.post('/1', controllers.controllers.post)

module.exports = router
