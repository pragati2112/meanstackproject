var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validateEmail = function(Email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(Email);
};

var schoolSchema = mongoose.Schema({
    board: { type: String, default: 'CBSE' },
    affilationNo: { type: String, required: true, unique: true },
    Email: {
         type: String ,
         required:true,
         validate: [validateEmail, 'Please fill a valid email address'] 
     },
    data: Schema.Types.Mixed,
    latlng: {
        lat: String,
        lng: String
    },
    loc: {
        type: { type: String },
        coordinates: []
    },
    
});

module.exports = mongoose.model('blogposts', schoolSchema); 
