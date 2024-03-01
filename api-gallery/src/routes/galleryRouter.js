const express = require('express')
const router = express.Router()
const upload = require('../config/multerconfig')
const galleryController = require('../controllers/galleryController')

router.get('/', galleryController.getAllGallery)
router.post('/', upload.single('image'), galleryController.createGallery)
// permite que o usuário visualize a imagem
router.get('/public/uploads/:image', galleryController.getImage)
router.get('/:id', galleryController.getGalleryById)
router.put('/:id', upload.single('image'), galleryController.putGallery)
router.delete('/:id', galleryController.deleteGallery)

module.exports = router
