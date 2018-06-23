const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  })
})

var hashedPassword = '$2a$10$rS6eOSeRUKNpm48Gw.CB6e.LG3LVOE.XvRIBWU2fQDL6V45W6lL9K'

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
})
// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// var message = 'I am a user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`This is the message ${message}`);
// console.log(`This is the hash ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString()
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
//
// if (resultHash === token.hash) {
//   console.log('Data not changed');
// } else {
//   console.log('Data Changed');
// }
