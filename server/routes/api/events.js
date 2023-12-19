const express = require('express')
const { getAllEvents, createEvent } = require('../../controllers/eventsController')
const router = express.Router()

router.route('/')
    .get(getAllEvents)
    .post(createEvent)

module.exports = router