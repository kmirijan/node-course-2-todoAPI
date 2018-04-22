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
	
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5adbe26e551b39592a2c36c4')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5ad9a8e028af2143d06c544a')
	}, {
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	//client.close();
});