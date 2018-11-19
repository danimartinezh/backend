const express = require('express')
const router = express.Router()

const advice_controller = require('../controllers/advice.controller')

router.get('/', advice_controller.getAdvices)
//router.delete()
//router.post()
//router.put()

module.exports = router;