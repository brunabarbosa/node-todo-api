const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) -- remove all matches {} --removes everything
// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// sends the deleted doc back
// Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5a1c38241e1ae902910eda50'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5a1c38241e1ae902910eda50').then((todo) => {
    console.log(todo);
});
// send the deleted doc back
// Todo.findByIdAndRemove()
