import { getDbConnection } from '../utils/db'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { section, names } = query

  const db = await getDbConnection()

  // Prepare SQL
  let sql = `SELECT name, value FROM chart_data WHERE 1`
  const params = []

  if (section) {
    sql += ' AND section = ?'
    params.push(section)
  }

  if (names) {
    // names can be comma-separated: ?names=Trench amount,Amount Dispursed
    const placeholders = names.split(',').map(() => '?').join(',')
    sql += ` AND name IN (${placeholders})`
    params.push(...names.split(','))
  }

  sql += ' ORDER BY created_at DESC'

  const [rows] = await db.execute(sql, params)
  return rows
})
