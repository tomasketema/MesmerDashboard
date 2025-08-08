import { getDbConnection } from '../utils/db'
import { chartCache } from '../utils/cache'
import { getQuery } from 'h3' // for extracting query params in Nuxt

const CACHE_TTL_SECONDS = 604800 // 7 days

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { section, names } = query

  // Create a cache key based on query params (normalized)
  const keyParts = [
    section ? `section:${section.toLowerCase().trim()}` : '',
    names ? `names:${names.toLowerCase().replace(/\s/g, '')}` : ''
  ].filter(Boolean)

  const cacheKey = keyParts.length ? keyParts.join('|') : 'all_data'

  // Check cache first
  const cachedResult = chartCache.get(cacheKey)
  if (cachedResult) {
    console.log(`Serving cached data for key: ${cacheKey}`)
    return cachedResult
  }

  // Build SQL query
  const db = await getDbConnection()
  let sql = `SELECT name, value FROM chart_data WHERE 1`
  const params = []

  if (section) {
    sql += ' AND section = ?'
    params.push(section)
  }

  if (names) {
    // names can be comma-separated, e.g. ?names=foo,bar
    const placeholders = names.split(',').map(() => '?').join(',')
    sql += ` AND name IN (${placeholders})`
    params.push(...names.split(','))
  }

  sql += ' ORDER BY created_at DESC'

  const [rows] = await db.execute(sql, params)

  // Cache result for 7 days
  chartCache.set(cacheKey, rows, CACHE_TTL_SECONDS)

  console.log(`Fetched from DB and cached data for key: ${cacheKey}`)

  return rows
})
