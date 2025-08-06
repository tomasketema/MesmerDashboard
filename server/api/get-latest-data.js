import mysql from 'mysql2/promise'

export default defineEventHandler(async () => {
  let db

  try {
    // Connect inside the handler (no top-level await)
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'mesmer_dashboard',
    })

    const [rows] = await db.execute(`
      SELECT t1.*
      FROM chart_data t1
      INNER JOIN (
        SELECT name, MAX(created_at) AS latest
        FROM chart_data
        GROUP BY name
      ) t2 ON t1.name = t2.name AND t1.created_at = t2.latest
    `)

    return {
      success: true,
      data: rows,
    }
  } catch (err) {
    console.error('Error fetching data:', err)
    return {
      success: false,
      message: 'Failed to retrieve data',
    }
  } finally {
    if (db) await db.end()
  }
})
