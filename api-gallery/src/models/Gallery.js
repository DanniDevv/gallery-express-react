const mongoose = require('../database')

const GallerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  createdAt: { // cuando fue creado
    type: Date,
    default: Date.now
  },
  updatedAt: { // cuando fue actualizado
    type: Date,
    default: Date.now
  }

})

const Gallery = mongoose.model('Gallery', GallerySchema)

module.exports = Gallery
