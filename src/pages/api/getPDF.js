import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'src/public/marcelo-developer-2021.pdf')
const pdfBuffer = fs.readFileSync(filePath)

export default function getPDF(req, res) {
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', 'attachment; marcelo-developer-2021.pdf');
  res.send(pdfBuffer)
}