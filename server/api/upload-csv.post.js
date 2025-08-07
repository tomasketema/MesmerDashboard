import formidable from 'formidable'
import fs from 'fs'
import { parse } from 'csv-parse/sync'
import { getDbConnection } from '../utils/db'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default defineEventHandler(async (event) => {
  try {
    const form = formidable({ multiples: false, keepExtensions: true })

    const { files } = await new Promise((resolve, reject) => {
      form.parse(event.node.req, (err, fields, files) => {
        if (err) reject(err)
        else resolve({ fields, files })
      })
    })

    // Get uploaded file
    const uploadedFile = Array.isArray(files.file) ? files.file[0] : files.file
    if (!uploadedFile || !uploadedFile.filepath) {
      throw new Error('No file uploaded')
    }

    const csvContent = fs.readFileSync(uploadedFile.filepath, 'utf-8')

    // Robust parsing: auto-trim headers & values, detect delimiter
    const records = parse(csvContent, {
      columns: (header) => header.map(h => h.trim().toLowerCase()),
      skip_empty_lines: true,
      trim: true,
      delimiter: csvContent.includes('\t') ? '\t' : ',' // tab or comma
    })

    if (!records.length) throw new Error('CSV has no data')

    const db = await getDbConnection()
    const insertValues = []

    for (const row of records) {
      const section = row.section?.trim()
      const metric = row.metric?.trim()
      const type = row.type?.trim().toLowerCase()
      const value = parseFloat(row.value)

      if (!section || !metric || !type || isNaN(value)) continue

      insertValues.push([section, metric, type, value, new Date()])
    }

    if (!insertValues.length) throw new Error('No valid rows to insert')

    const insertQuery = `
      INSERT INTO chart_data (section, name, chart_type, value, created_at)
      VALUES ?
    `

    await db.query(insertQuery, [insertValues])

    return { status: 'success', message: 'CSV uploaded successfully!' }

  } catch (error) {
    console.error('CSV upload error:', error)
    return { status: 'error', message: error.message || 'Failed to upload CSV' }
  }
})
