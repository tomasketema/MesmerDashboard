import { getDbConnection } from '../utils/db'
import { chartCache } from '../utils/cache'
import { getQuery } from 'h3'



export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const section = (query.section || '').toString().trim()
  
  const rawList = (query.metrics || query.names || '').toString()
  const metrics = rawList
    ? rawList.split(',').map(s => s.trim()).filter(Boolean)
    : []

  const keyParts = [
    section ? `section:${section.toLowerCase()}` : '',
    metrics.length ? `metrics:${metrics.map(m => m.toLowerCase()).join('|')}` : ''
  ].filter(Boolean)
  const cacheKey = keyParts.length ? keyParts.join('|') : 'change_header_all'

  const cached = chartCache.get(cacheKey)
  if (cached) return cached

  const db = await getDbConnection()


  let sql = `SELECT section, subsection, name, created_at FROM chart_data WHERE 1`
  const params = []

  if (section) {
    sql += ' AND section = ?'
    params.push(section)
  }

  if (metrics.length) {
    const placeholders = metrics.map(() => '?').join(',')
    sql += ` AND name IN (${placeholders})`
    params.push(...metrics)
  }

  sql += ' ORDER BY created_at DESC'

  const [rows] = await db.execute(sql, params)


  const latestMap = new Map()
  for (const row of rows) {
    if (!latestMap.has(row.name)) {
      latestMap.set(row.name, { name: row.name, subsection: row.subsection || '' })
    }
  }

  let items
  if (metrics.length) {
    items = metrics
      .filter(m => latestMap.has(m))
      .map(m => latestMap.get(m))
  } else {
    items = Array.from(latestMap.values())
  }

  let suggestedHeader = ''
  const targetItem = items.find(it => /target/i.test(it.name))
  if (targetItem && targetItem.subsection) {
    suggestedHeader = targetItem.subsection
  } else if (items[0]?.subsection) {
    suggestedHeader = items[0].subsection
  }

  const result = { items, suggestedHeader }

  chartCache.set(cacheKey, result, 60)
  return result
})
