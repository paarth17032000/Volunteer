const express = require("express");
const {
	getAllEvents,
	createEvent,
	registerForAnEvent,
} = require("../../controllers/eventsController");
const router = express.Router();

router.route("/").get(getAllEvents).post(createEvent);

router.route("/:eventId").post(registerForAnEvent);

module.exports = router;
