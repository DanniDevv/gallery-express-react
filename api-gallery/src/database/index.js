require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URI } = process.env

mongoose.connect(MONGODB_URI).then(() => {
  console.log('Database connected')
}).catch((err) => {
  console.log('Error connecting to database', err)
})

module.exports = mongoose
