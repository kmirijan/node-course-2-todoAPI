//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name:'Khacho', age:21};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err){
		return console.log("unable to connect to mongo server");
	}

	console.log('Connected to Mongo server');
	const db = client.db('TodoApp');
	var myobj = {text: 'Something to do', completed: false};

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do', completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert Todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	// db.collection('Users').insertOne({
	// 	name: 'Khachatur', 
	// 	age: 21,
	// 	location: 'Santa Cruz'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert Todo', err);
	// 	}

	// 	//console.log(JSON.stringify(result.ops, undefined, 2))
	// 	console.log(result.ops[0]._id.getTimestamp())
	// });

	client.close();
});