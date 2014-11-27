var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  initialize: function(){
    var that = this;
    this.on('creating', function(model, attrs, options){
      bcrypt.hash(model.get('password'), null, null, function(err, hash) {
          // Store hash in your password DB.
        model.set('password', hash);
      });
    });
  }
  //hash the passwrod and store it in databse
});


module.exports = User;
