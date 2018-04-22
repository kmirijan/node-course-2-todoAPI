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
	
	//delete many
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// })

	//findOneAndDelete
	db.collection('Users').findOneAndDelete({
		_id: new ObjectID("5ad9a6de0859b23d683e7f42")
	}).then((result) => {
		console.log(result);
	})
	//client.close();
});