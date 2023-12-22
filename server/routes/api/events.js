const express = require("express");
const {
	getAllEvents,
	createEvent,
	getEventDetails,
	registerForAnEvent,
	deleteEvent,
	toggleUpvotesForEvent
} = require("../../controllers/eventsController");

const router = express.Router();

router.route("/").get(getAllEvents).post(createEvent);

router.route("/:eventId").get(getEventDetails).post(registerForAnEvent).delete(deleteEvent);

router.route("/upvote/:eventId").post(toggleUpvotesForEvent)

module.exports = router;
