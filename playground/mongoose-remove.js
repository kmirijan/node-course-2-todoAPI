const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/db/todo.js');
const {User} = require('./../server/db/user.js');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5af1e855cfb447f1fd311c4b').then((todo) => {
	console.log(todo);
});
