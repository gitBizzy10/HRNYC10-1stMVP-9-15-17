var db = require('../db/db.js')

module.exports = {

  models: {

    get: function(callback) {
           //query of what I want to select from my database
           var query = 'SELECT * FROM Restaurants'
           //queries the database for the query above, then runs a function
           db.query(query, function(err, results){
             //uses the callback passed in on results
             console.log(results)
             callback(err, results)
           });
    },

    post: function(callback) {

    }
  }
};
