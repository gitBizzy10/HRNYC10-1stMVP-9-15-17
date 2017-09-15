// rq db
var db = require('../db/db.js')
//rq models
var models = require('../models/models.js')

//exports controllers to be used in routes
module.exports = {

  controllers: {

    get: function(req, res) {
      //call on model.get, pass in the results obtained
      models.models.get( function(err, results) {
        if (err){
          console.error('err');
        }
        //send results as a json
        res.json(results)
      });
    },

    post: function(req, res) {

      res.json('post')

    }
  }
};
