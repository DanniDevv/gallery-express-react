const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/public/uploads', express.static('public/uploads'))

const galleryRouter = require('./routes/galleryRouter')
app.use('/api/gallery', galleryRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
