const { default: mongoose } = require("mongoose");
const { Events } = require("../model/Events");
const User = require("../model/User");

const getAllEvents = async (req, res) => {
	const events = await Events.find();
	if (!events) return res.status(204).json({ message: "No Events Listed." });
	res.status(200).json(events);
};

const createEvent = async (req, res) => {
	const { eventName, userId, eventCategory, volunteerRequired, date, venue, desc } = req.body;
	if (!eventName || !userId || !eventCategory || !volunteerRequired || !date || !venue || !desc)
		return res.status(400).json({ message: "All mentioned details are required." });
	const duplicate = await Events.findOne({ eventName, userId });
	if (duplicate)
		return res
			.status(409)
			.json({ message: "Event with same name and same host already exists." });
	const eventHostDetails = await User.findById(userId);
	try {
		const result = await Events.create({
			eventName,
			eventHostInfo: {
				name: eventHostDetails.name,
				email: eventHostDetails.email,
				phoneNumber: eventHostDetails.phoneNumber,
			},
			userId,
			eventCategory,
			volunteerRequired,
			date,
			venue,
			desc,
			upvotes: [],
			volunteers: [],
		});
		const updatedUser = await User.findByIdAndUpdate(
			userId,
			{ $push: { eventsCreated: result } },
			{ new: true },
		);
		res.status(201).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getEventDetails = async (req, res) => {
	try {
		const eventId = req.params.eventId;
		if (!mongoose.Types.ObjectId.isValid(eventId)) {
			return res.status(400).json({ message: "Invalid Id." });
		}
		if (!eventId) res.status(400).json({ message: "Invalid request." });
		const validEvent = await Events.findById(eventId);
		res.status(201).json(validEvent);
	} catch (err) {
		console.log(err.message);
	}
};

const deleteEvent = async (req, res) => {
	try {
		const eventId = req.params.eventId;
		if (!mongoose.Types.ObjectId.isValid(eventId)) {
			return res.status(400).json({ message: "Invalid Id." });
		}
		if (!eventId) res.status(400).json({ message: "Invalid request." });
		// get user's id who created the event
		const validEvent = await Events.findById(eventId);
		// removed event from the user that created it
		await User.findByIdAndUpdate(
			validEvent.userId,
			{ $pull: { eventsCreated: { _id: eventId } } },
			{ new: true },
		);
		// update other user eventsCreated
		await User.updateMany(
			{ "eventsRegistered._id": eventId },
			{ $pull: { eventsRegistered: { _id: eventId } } },
			{ new: true },
		);
		await Events.findByIdAndDelete(eventId);
		res.status(201).json({ message: "Event has been removed" });
	} catch (err) {
		console.log(err.message);
	}
};

const registerForAnEvent = async (req, res) => {
	try {
		const { userId } = req.body;
		const eventId = req.params.eventId;
		console.log(userId, eventId);
		if (!userId || !eventId) res.status(400).json({ message: "Invalid request." });
		if (!mongoose.Types.ObjectId.isValid(eventId) || !mongoose.Types.ObjectId.isValid(userId)) {
			return res.status(400).json({ message: "Invalid Id." });
		}
		// when user register event add to events registered section
		// event in which user register will get user info
		// user which is registering
		const validUser = await User.findById(userId);
		// event in which registering
		const validEvent = await Events.findById(eventId);
		if (!validUser || !validEvent) res.status(409).json({ message: "Invalid Event or User!" });

		if (
			validEvent.volunteers.length > 0 &&
			validEvent.volunteers.some((volunteerObj) => volunteerObj.email === validUser.email)
		) {
			res.status(400).json({ message: "User Already Registered." });
		}

		if (validEvent.volunteers.length >= validEvent.volunteerRequired) {
			res.status(400).json({ message: "Event has reached its maximum registrations" });
		}
		const volunteerInfo = {
			name: validUser.name,
			email: validUser.email,
			phoneNumber: validUser.phoneNumber,
		};
		// event's Host
		const eventHost = await User.findById(validEvent.userId);
		const eventIndex = eventHost.eventsCreated.findIndex(
			(eventObj) => eventObj._id === validEvent._id,
		);
		await User.updateOne(
			{
				_id: validEvent.userId, // Replace with the actual user _id
				"eventsCreated._id": eventId,
			},
			{
				$push: {
					"eventsCreated.$.volunteers": volunteerInfo,
				},
			},
		);
		const updateUserRegistering = await User.findByIdAndUpdate(
			userId,
			{ $push: { eventsRegistered: validEvent } },
			{ new: true },
		);

		const updateEvent = await Events.findByIdAndUpdate(
			eventId,
			{ $push: { volunteers: volunteerInfo } },
			{ new: true },
		);
		res.status(201).json({
			success: true,
			message: `${validUser.name} added to ${validEvent.eventName}`,
		});
	} catch (err) {
		console.log(err.message);
	}
};

const toggleUpvotesForEvent = async (req, res) => {
	try {
		const eventId = req.params.eventId;
		const userId = req.body.userId;
		console.log(eventId);
		if (!userId || !eventId) res.status(400).json({ message: "Invalid request." });
		if (!mongoose.Types.ObjectId.isValid(eventId) || !mongoose.Types.ObjectId.isValid(userId)) {
			return res.status(400).json({ message: "Invalid Id." });
		}
		console.log(1);
		const validUser = await User.findById(userId);
		const validEvent = await Events.findById(eventId);
		console.log(2);
		if (!validUser || !validEvent) res.status(409).json({ message: "Invalid Event or User!" });
		const isUserUpvoteExists = validEvent.upvotes.includes(userId);
		console.log(3);
		if (isUserUpvoteExists) {
			console.log(4);
			await Events.findByIdAndUpdate(eventId, { $pull: { upvotes: userId } });
			// upvote not update in user owner eventsCreated
			await User.findByIdAndUpdate(validEvent.userId, {
				$pull: { eventsCreated: { upvotes: userId } },
			});
		} else {
			console.log(5);
			await Events.findByIdAndUpdate(eventId, { $push: { upvotes: userId } });
			await User.findByIdAndUpdate(validEvent.userId, {
				$push: { eventsCreated: { upvotes: userId } },
			});
		}
		console.log(6);
		res.status(201).json({message: 'success'});
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = {
	getAllEvents,
	createEvent,
	registerForAnEvent,
	getEventDetails,
	deleteEvent,
	toggleUpvotesForEvent,
};
