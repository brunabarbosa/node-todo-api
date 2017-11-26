var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI ||
    'mongodb://brunabarbosa:brunaolib13@ds147681.mlab.com:47681/todo_app_brunabarbosa', {
    useMongoClient: true
});

module.exports = {
    mongoose
}
