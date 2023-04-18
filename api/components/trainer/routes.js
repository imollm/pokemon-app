'use strict'

const express = require('express')
const controller = require('./controller')
const router = express.Router()
const multipart = require('connect-multiparty')
const mdUpload = multipart({ uploadDir: './upload/trainer' })

router.get('/test', controller.test)

router.get('/', controller.all)
router.get('/:id', controller.get)
router.get('/last/:limit', controller.last)
router.get('/image/:id', controller.getImage)
router.get('/search/:search', controller.search)

router.post('/', controller.save)
router.post('/image/:id', mdUpload, controller.upload)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router