var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        minlenght: 1,
        required:true
    }
});

module.exports = {
    User
};
