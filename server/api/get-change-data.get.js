import { getDbConnection } from '../utils/db'
import { chartCache } from '../utils/cache'

const CACHE_TTL_SECONDS = 604800

export default defineEventHandler(async (event) => {
  const cacheKey = 'percentage_changes'

  const cachedResult = chartCache.get(cacheKey)
  if (cachedResult) {
    console.log(`Serving cached percentage changes for key: ${cacheKey}`)
    return cachedResult
  }

  const db = await getDbConnection()

  const metrics = [
    { section: 'Formal Enterprise', name: 'Disability Registration', key: 'disability' },
    { section: 'MESMER Supported', name: 'Enterprises', key: 'enterprises' },
    { section: 'Informal Enterprise', name: 'Formal Enterprises', key: 'formalEnterprises' },
    { section: 'Informal Enterprise', name: 'Informal Enterprises', key: 'informalEnterprises' },
    { section: 'Formal Enterprise', name: 'IFB Registration', key: 'ifbRegistration' },
    { section: 'MESMER Supported', name: 'Outreach Individuals', key: 'outreach' },
    { section: 'MESMER Supported', name: 'Youth Employment', key: 'youthEmployment' },
    { section: 'Formal Enterprise', name: 'Total', key: 'total' }
  ]

  const conditions = metrics.map(() => '(section = ? AND name = ?)').join(' OR ')
  let sql = `SELECT section, name, value, created_at FROM chart_data`
  if (conditions) {
    sql += ` WHERE ${conditions}`
  }
  sql += ' ORDER BY section, name, created_at DESC'

  const params = []
  metrics.forEach(metric => {
    params.push(metric.section, metric.name)
  })

  const [rows] = await db.execute(sql, params)


  const groups = new Map()
  for (const row of rows) {
    const key = `${row.section}:${row.name}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(row)
  }

 
  const data = {}

  for (const metric of metrics) {
    const key = `${metric.section}:${metric.name}`
    const entries = groups.get(key) || []

    entries.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))

    const latestValue = entries[0] ? parseFloat(entries[0].value) : null
    const previousValue = entries[1] ? parseFloat(entries[1].value) : null

    // Calculate percentage change
    let change = null
    if (latestValue != null && previousValue != null) {
      if (previousValue === 0) {
        change = latestValue > 0 ? '+∞%' : '0%'
      } else {
        const pct = ((latestValue - previousValue) / previousValue) * 100
        const sign = pct > 0 ? '+' : pct < 0 ? '-' : ''
        change = `${sign}${Math.round(Math.abs(pct))}%`
      }
    } else if (latestValue != null && previousValue == null) {
      change = 'New'
    } else {
      change = '0%'
    }

    
    data[metric.key] = {
      latest: latestValue,
      previous: previousValue,
      change
    }
  }

  chartCache.set(cacheKey, data, CACHE_TTL_SECONDS)
  console.log(`Fetched from DB and cached percentage changes for key: ${cacheKey}`)

  return data
})
