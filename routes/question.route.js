const express = require('express')
const router = express.Router()

const question_controller = require('../controllers/question.controller')

router.get('/', question_controller.getQuestions)
router.delete('/', question_controller.delete)
router.post('/', question_controller.add)
router.put('/', question_controller.putQuestion)

module.exports = router;