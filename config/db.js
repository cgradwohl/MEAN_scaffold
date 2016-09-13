// config/db.js
// In the future, you may want to add more config files and call them
// in server.js. Now that this file is defined and we’ve called it in
// our server.js using 'var db = require('./config/db');`, you can call
// any items inside of it using db.url. For getting this to work, you’ll
// want a local MongoDB database installed or you can just grab a quick
// one off services like Modulus or Mongolab.


module.exports = {
    url : 'mongodb://localhost/stencil-dev'
}
