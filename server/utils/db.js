import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mesmer_dashboard',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function getDbConnection() {
  return pool;
}
