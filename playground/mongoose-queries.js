const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/db/todo.js');
const {User} = require('./../server/db/user.js');

// var id = '5add3763eec95b9434f3cd191';
var uID = '5adbee5cbbc3c0cc44a2da71';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos)
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todos', todo)
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo By ID', todos)
// }).catch((e) => console.log(e));

User.findById(uID).then((user) => {
	if(!user){
		return console.log('User ID not found');
	}
	console.log('User', user)
}).catch((e) => console.log(e));