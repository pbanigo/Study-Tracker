const express = require('express')
const router = express.Router()
const studiesController = require('../controllers/studies') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, studiesController.getStudies)

router.post('/createStudy', studiesController.createStudy)

router.put('/markComplete', studiesController.markComplete)

router.put('/markIncomplete', studiesController.markIncomplete)

router.put('/editStudy', studiesController.editStudy)

router.delete('/deleteStudy', studiesController.deleteStudy)

module.exports = router