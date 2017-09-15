var db = require('../db/db.js')

module.exports = {

  models: {

    get: function(callback) {
           //query of what I want to select from my database
           var query = 'select * from restaurants'
           //queries the database for the query above, then runs a function
           db.query(query, function(results){
             //uses the callback passed in on results
             callback(results)
           });
    },

    post: function(callback) {

    }
  }
}
