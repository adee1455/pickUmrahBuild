// import mysql from "mysql2/promise";

// export async function query({ query, values = [] }) {
//   const dbconnection = await mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     database: process.env.MYSQL_DATABASE,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//   });

//   try {
//     console.log("Db COnnected");
//     const [results] = await dbconnection.execute(query, values);
//     dbconnection.end();
//     // console.log("Db COnnected");
//     return results;
//   } catch (error) {
//     console.log("Db not COnnected");
//     throw Error(error.message);
//     return { error };
//   }
// }

// lib/db.js

const mysql = require('mysql2/promise');

// Create a database connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Execute SQL queries using the pool
const query = async ({ query, values }) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(query, values);
    return rows;
  } finally {
    connection.release();
  }
};


module.exports = { query };
