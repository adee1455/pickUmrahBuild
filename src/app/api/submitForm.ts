import { NextApiRequest, NextApiResponse } from 'next';
// import { Pool } from 'mysql2/typings/mysql/lib/Pool'; // Replace with your database connection
import { createPool } from 'mysql2/promise';
import mysql from "mysql2/promise";

const pool = createPool({
  host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default async function handler(req: NextApiRequest, res: NextApiResponse ) {
  if (req.method === 'POST') {
    try {
      const { name, noOfPeople, phoneNumber, choice, hiddenValue } = req.body;

      // Prepare the SQL query
      const query = `INSERT INTO contactForm (name, no_of_people, phone_number, choice, hidden_value) VALUES (?, ?, ?, ?, ?)`;

      // Execute the query with prepared statement to prevent SQL injection
      const [result] = await pool.execute(query, [name, noOfPeople, phoneNumber, choice, hiddenValue]);

      res.status(200).json({ message: 'Form data submitted successfully!' });
    } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).json({ message: 'Error: Form submission failed.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
