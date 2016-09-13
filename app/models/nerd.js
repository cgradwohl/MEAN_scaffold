// app/models/nerd.js
// grab the mongoose module
// This is where we will use the Mongoose module and be able to define our Nerd
// model with a name attribute with data type String. If you want more fields,
// feel free to add them here. Read up on the Mongoose docs to see all the things
// you can define.


var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Nerd', {
    name : {
      type : String,
      default: ''
    }
});
