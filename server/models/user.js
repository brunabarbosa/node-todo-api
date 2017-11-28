var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        minlenght: 1,
        required:true,
        unique: true
    }
});

module.exports = {
    User
};
