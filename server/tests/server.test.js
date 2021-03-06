const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server.js');
const {Todo} = require('./../db/todo.js');
const {todos, populateTodos, users, populateUser} = require('./seed/seed');

beforeEach(populateUser);
beforeEach(populateTodos);

describe('POST /todos', () => {
	it('should create new todo', (done) => {
		var text = 'Test todo text';

		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect((res) => {
			expect(res.body.text).toBe(text);
		})
		.end((err, res) => {
			if(err){
				return done(err);
			}

			Todo.find({text}).then((todos) => {
				expect(todos.length).toBe(1);
				expect(todos[0].text).toBe(text);
				done();
			}).catch((e) => done(e));
		});
	});

	it('should not create todo invalid body data', (done) => {
		request(app)
		.post('/todos')
		.send({})
		.expect(400)
		.end((err, res) => {
			if(err){
				return done(err);
			}

			Todo.find().then((todos) => {
				expect(todos.length).toBe(2);
				done();
			}).catch((e) => done(e));
		});
	});
});

describe('Get /todos', () => {
	it('Should get all todos', (done) => {
		request(app)
		.get('/todos')
		.expect(200)
		.expect((res) => {
			expect(res.body.todos.length).toBe(2);
		})
		.end(done);
	});
});

describe('Get /todos/:id', () => {
	it('should return todo doc', (done) => {
		request(app)
		.get(`/todos/${todos[0]._id.toHexString()}`)
		.expect(200)
		.expect((res) => {
			expect(res.body.todo.text).toBe(todos[0].text);
		})
		.end(done);
	});

	it('should return 404 if todo not found', (done) => {
		request(app)
		.get(`/todos/${new ObjectID().toHexString()}`)
		.expect(404)
		.end(done);
	})

	it('should return 404 for non-object id', (done) => {
		request(app)
		.get(`/todos/123`)
		.expect(404)
		.end(done);
	})
});

describe('Delete /todos/:id', () => {
	it('should remove a todo', (done) => {
		var hexId = todos[1]._id.toHexString();

		request(app)
		.delete(`/todos/${hexId}`)
		.expect(200)
		.expect((res) => {
			expect(res.body.todo._id).toBe(hexId);
		})
		.end((err, res) => {
			if(err){
				return done(err)
			}

			Todo.findById(hexId).then((todo) => {
				expect(todo).toNotExist();
				done();
			}).catch((e) => done(e));
		});
	});

	it('should return 404 if todo not found', (done) => {
		request(app)
		.delete(`/todos/${new ObjectID().toHexString()}`)
		.expect(404)
		.end(done);
	})

	it('should return 404 for non-object id', (done) => {
		request(app)
		.delete(`/todos/123`)
		.expect(404)
		.end(done);
	})
});
describe('Patch /todos/:id', () => {
	it('should update the todo', (done) => {
		var hexId = todos[0]._id.toHexString();
		var text = "Patch test 1";

		request(app)
		.patch(`/todos/${hexId}`)
		.send({
			completed: true,
			text
		})
		.expect(200)
		.expect((res) => {
			expect(res.body.todo.text).toBe(text);
			expect(res.body.todo.completed).toBe(true);
			expect(res.body.todo.completedAt).toBeA('number');
		})
		.end(done);
	});

	it('should clear completedAt when todo is not completed', (done) => {
		var hexId = todos[0]._id.toHexString();
		var text = 'Patch test 2'

		request(app)
		.patch(`/todos/${hexId}`)
		.send({
			completed: false,
			text
		})
		.expect(200)
		.expect((res) => {
			expect(res.body.todo.text).toBe(text);
			expect(res.body.todo.completed).toBe(false);
			expect(res.body.todo.completedAt).toNotExist();
		})
		.end(done);

	});
});

// describe('GET /user/me', () => {
// 	it('should return user if authenticated', (done) => {
// 		request(app)
// 		.get('/users/me')
// 		.set('x-auth', users[0].tokens[0].token)
// 		.expect(200)
// 		.end(done);
// 	})
//
// 	it('should return 401 if not authenticated', (done) => {
// 	})
// })
