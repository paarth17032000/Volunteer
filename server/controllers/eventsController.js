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
			.json({ message: "Event with same name and same host already exists." }); //conflict
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

const registerForAnEvent = async (req, res) => {
	const { userId } = req.body;
	const eventId = req.query.eventId;
	console.log(userId, eventId);
	if (!userId || !eventId) res.status(400).json({ message: "Invalid request." });
	// when user register event add to events registered section
	// event in which user register will get user info
	const validUser = await User.findById(userId);
	const validEvent = await Events.findById(eventId);
	if (!validUser || !validEvent) res.status(409).json({ message: "Invalid Event or User!" });
	const volunteerInfo = {
		name: validUser.name,
		email: validUser.email,
		phoneNumber: validUser.phoneNumber,
	};
	try {
		const updateUser = await User.findByIdAndUpdate(
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
	} catch (err) {}
};

module.exports = { getAllEvents, createEvent, registerForAnEvent };
