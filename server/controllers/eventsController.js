const Events = require("../model/Events");
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
		});
		const updatedUser = await User.findByIdAndUpdate(
			userId,
			{ $push: { eventsCreated: result._id } },
			{ new: true },
		);
		res.status(201).json(result);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { getAllEvents, createEvent };
