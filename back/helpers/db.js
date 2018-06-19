const mysql = require('mysql');

// Create connection
const connection = mysql.createConnection({
    host: 'localhost', // database host
    user: 'root', // your database username
    password: 'Azerty123!', // your database password
    database: 'Lodyssey' // your database name
  });
  
  connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
  });

  module.exports = connection;