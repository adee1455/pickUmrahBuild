import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    console.log("Db COnnected");
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    // console.log("Db COnnected");
    return results;
  } catch (error) {
    console.log("Db not COnnected");
    throw Error(error.message);
    return { error };
  }
}
