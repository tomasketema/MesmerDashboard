import mysql from 'mysql2/promise'

let connection

export async function getDbConnection() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mesmer_dashboard',
    })
  }
  return connection
}
