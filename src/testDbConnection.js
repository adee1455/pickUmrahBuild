   // testDbConnection.js
   require('dotenv').config();
   const { query } = require('./lib/db.cjs');

   const testConnection = async () => {
     try {
       console.log('Environment variables:', {
         host: process.env.MYSQL_HOST,
         user: process.env.MYSQL_USER,
         database: process.env.MYSQL_DATABASE
       });
       const result = await query({ query: 'SELECT 1' }); // Simple query to test connection
       console.log('Database connection successful:', result);
     } catch (error) {
       console.error('Database connection failed:', error.message);
       process.exit(1);
     }
   };

   testConnection();