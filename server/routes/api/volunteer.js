const express = require('express')
const { getAllVolunteers, addAVolunterr } = require('../../controllers/volunteerController')
const router = express.Router()

router.route('/')
    .get(getAllVolunteers)
    .post(addAVolunterr)

module.exports = router