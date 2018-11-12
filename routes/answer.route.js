const express = require('express')
const router = express.Router()

const answer_controller = require('../controllers/answer.controller')

//router.get('/', answer_controller.getQuestions)
//router.delete()
router.post('/', answer_controller.add)
//router.put()

module.exports = router;