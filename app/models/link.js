var db = require('../config');
var Click = require('./click');
var crypto = require('crypto');

var Link = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {
    visits: 0
  },
  clicks: function() {
    return this.hasMany(Click);
  },
  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var shasum = crypto.createHash('sha1');
      shasum.update(model.get('url'));
      model.set('code', shasum.digest('hex').slice(0, 5));
    });
  }
});

module.exports = Link;


// go to the homepage
// be redirected to login
// change to sign up
  // sign up and post login info to database
  // log in using credentials
  // start a session
// log out



// Go to login page
//
// If attempts log in
  // Check for validity of username and password using bcrypt (Check user)
    // regenerate/create a new session if valid
    // send to login page if not valid
//If he signs up
  //Check if username / password exists (Check user)
    // Hash password using bcrypt
    // Write username and password to database
    // redirect to login page
    //
// Log out
