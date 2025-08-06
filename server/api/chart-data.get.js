// server/api/chart-data.get.js

import mysql from 'mysql2/promise'

export default defineEventHandler(async (event) => {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mesmer_dashboard',
  })

  // Get latest entries grouped by name
  const [rows] = await connection.execute(`
    SELECT name, value, MAX(created_at) as created_at
    FROM chart_data
    GROUP BY name
    ORDER BY created_at DESC
  `)

  await connection.end()

  return {
    data: rows
  }
})
