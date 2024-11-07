const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'nodedatabase.cn4aiyaumt02.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'testing123',
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL server');

  // Step 1: Use the "mydb" database
  connection.query('USE mydb', (err) => {
    if (err) {
      console.error('Error selecting database:', err);
      return;
    }

    console.log('Using database "mydb"');

    // Step 2: Run the SELECT query to get all rows from my_table
    const selectQuery = 'SELECT * FROM my_table';
    connection.query(selectQuery, (err, rows) => {
      if (err) {
        console.error('Error executing SELECT query:', err);
        return;
      }

      // Display the retrieved rows (data)
      console.log('Data retrieved from my_table:', rows);

      // Optionally, loop through the rows if you want to display each row in a specific format
      rows.forEach(row => {
        console.log(`ID: ${row.id}, Text: ${row.text}`);
      });
    });
  });
});
