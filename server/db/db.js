var mysql =  require('mysql')

var connection = mysql.createConnection({
  user: 'root',
  pw: '',
  database: 'foods'
})

connection.connect

module.exports = connection



//refactor with mongoose

//rq mongoose
//   const mongoose = require('mongoose')
// //connect
// var db //= mongoose.connection()
// //
// // mongoose.connect('ds135624.mlab.com:35624/1stmvp')
//
// module.exports = db
