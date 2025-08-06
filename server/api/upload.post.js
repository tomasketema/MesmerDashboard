import formidable from 'formidable'
import fs from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'
import { db } from '../utils/db' // Adjust if needed

export default defineEventHandler(async (event) => {
  const form = formidable({ multiples: false })

  const [fields, files] = await new Promise((resolve, reject) => {
    form.parse(event.node.req, (err, fields, files) => {
      if (err) {
        console.error('❌ Formidable error:', err)
        reject(err)
        return
      }
      resolve([fields, files])
    })
  })

  const uploadedFile = files.file

  if (!uploadedFile) {
    console.error('❌ No file uploaded')
    return { success: false, message: 'No file uploaded' }
  }

  try {
    const filePath = uploadedFile[0]?.filepath || uploadedFile.filepath;
    
    if (!filePath) {
      console.error('❌ Invalid file path:', uploadedFile);
      return { success: false, message: 'Invalid file upload' };
    }

    const csvData = fs.readFileSync(filePath, 'utf8')

    const records = parse(csvData, {
      columns: true,
      skip_empty_lines: true
    })

    console.log('✅ Parsed Records:', records)

    const connection = await db()

    for (const row of records) {
      const { name, value } = row
      const createdAt = new Date()

      await connection.execute(
        'INSERT INTO chart_data (name, value, created_at) VALUES (?, ?, ?)',
        [name, value, createdAt]
      )
    }

    return { success: true, message: 'CSV uploaded and data inserted successfully' }

  } catch (error) {
    console.error('❌ Upload handler error:', error)
    return { success: false, message: 'Error processing CSV: ' + error.message }
  }
})
