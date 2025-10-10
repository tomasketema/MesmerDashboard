import { getDbConnection } from '../utils/db'
import { chartCache } from '../utils/cache'
import { getQuery } from 'h3'

const CACHE_TTL_SECONDS = 604800

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { section, subsection, names } = query

  const keyParts = [
    section ? `section:${section.toLowerCase().trim()}` : '',
    subsection ? `subsection:${subsection.toLowerCase().trim()}` : '',
    names ? `names:${names.toLowerCase().replace(/\s/g, '')}` : ''
  ].filter(Boolean)

  const cacheKey = keyParts.length ? keyParts.join('|') : 'all_data'


  const cachedResult = chartCache.get(cacheKey)
  if (cachedResult) {
    console.log(`Serving cached data for key: ${cacheKey}`)
    return cachedResult
  }


  const db = await getDbConnection()
  let sql = `SELECT name, value FROM chart_data WHERE 1`
  const params = []

  if (section) {
    sql += ' AND section = ?'
    params.push(section)
  }

  if (names) {
    const placeholders = names.split(',').map(() => '?').join(',')
    sql += ` AND name IN (${placeholders})`
    params.push(...names.split(','))
  }

  sql += ' ORDER BY created_at DESC'

  const [rows] = await db.execute(sql, params)


  chartCache.set(cacheKey, rows, CACHE_TTL_SECONDS)

  console.log(`Fetched from DB and cached data for key: ${cacheKey}`)

  return rows
})
