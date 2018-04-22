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
	
	// db.collection('Todos').find({
	// 	_id: new ObjectID("5ad9a5849f4a662f54863bbf")
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unablel to fetch todos', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('Unablel to fetch todos', err);
	// });

	db.collection('Users').find({name: 'Khachatur'}).toArray().then((docs) => {
		console.log(`Users`);
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unablel to fetch todos', err);
	});

	//client.close();
});