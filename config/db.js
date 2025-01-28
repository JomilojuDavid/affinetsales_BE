const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '208.115.219.142',
  user: 'affinet1_2025',
  password: '@Brainstv2025.',
  database: 'affinet1_new1',
  port: 3306,
  connectTimeout: 15000, 
});


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = connection; 
