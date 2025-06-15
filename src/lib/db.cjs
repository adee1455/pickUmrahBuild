require('dotenv').config();
const mysql = require('mysql2/promise');
const dns = require('dns').promises;

// Function to get IPv4 address
const getIPv4Address = async (hostname) => {
  try {
    const records = await dns.resolve4(hostname);
    return records[0]; // Get the first IPv4 address
  } catch (error) {
    console.error('DNS resolution error:', error);
    return hostname; // Fall back to hostname if resolution fails
  }
};

// Create connection pool
const createPool = async () => {
  const ipAddress = await getIPv4Address(process.env.MYSQL_HOST);
  console.log('Resolved IP address:', ipAddress);
  
  return mysql.createPool({
    host: ipAddress,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000
  });
};

let pool = null;

// Get or create pool
const getPool = async () => {
  if (!pool) {
    pool = await createPool();
    
    // Test the connection
    try {
      const connection = await pool.getConnection();
      console.log('Database connection successful');
      connection.release();
    } catch (err) {
      console.error('Error connecting to the database:', err);
      console.error('Environment variables:', {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        database: process.env.MYSQL_DATABASE
      });
      throw err;
    }
  }
  return pool;
};

// Execute SQL queries using the pool
const query = async ({ query, values = [] }) => {
  let connection;
  try {
    const pool = await getPool();
    connection = await pool.getConnection();
    console.log('Executing query:', query, 'with values:', values);
    const [rows] = await connection.execute(query, values);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
};

module.exports = { query };