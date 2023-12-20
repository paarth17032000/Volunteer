const express = require("express");
const {
	getAllEvents,
	createEvent,
	registerForAnEvent,
} = require("../../controllers/eventsController");
const router = express.Router();

router
	.route("/")
	.get(getAllEvents)
	.post((req, res) => {
		req.query.eventId ? registerForAnEvent(req, res) : createEvent(req, res);
	});

module.exports = router;
