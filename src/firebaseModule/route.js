const router = require('express').Router()

const {sendNotification} = require('./send-notification')


router.post('/firebase/notification',sendNotification)

module.exports = router