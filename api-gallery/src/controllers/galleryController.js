const Gallery = require('../models/Gallery')

exports.getAllGallery = async (req, res) => {
  try {
    const gallery = await Gallery.find()
    res.json(gallery)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.createGallery = async (req, res) => {
  const { name, description } = req.body
  const image = req.file.path

  const newGallery = new Gallery({ name, description, image })

  try {
    const createGallery = await newGallery.save()
    res.status(201).json(createGallery)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id)
    res.json(gallery)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getImage = (req, res) => {
  res.sendFile(req.params.image, { root: './public/uploads' })
}

exports.putGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id)
    gallery.name = req.body.name
    gallery.description = req.body.description
    gallery.image = req.file.path
    const updatedGallery = await gallery.save()
    res.json(updatedGallery)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

exports.deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id)
    res.json({ message: 'Gallery has been deleted' })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}
