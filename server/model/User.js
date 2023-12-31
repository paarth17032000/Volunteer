const mongoose = require("mongoose");
const { eventSchema } = require("./Events");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		min: [6, "Name is too short"],
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		min: [6, "Password is too short"],
	},
	phoneNumber: {
		type: Number,
		required: true,
		min: [10, "Invalid number"],
	},
	eventsRegistered: {
		type: [
			{
				eventName: String,
				eventHostInfo: {
					name: {
						type: String,
						required: true,
					},
					email: {
						type: String,
						required: true,
					},
					phoneNumber: {
						type: Number,
						required: true,
					},
					hostId: mongoose.Schema.Types.ObjectId,
				},
				eventId: mongoose.Schema.Types.ObjectId,
			},
		],
		required: true,
		max: 2,
	},
	eventsCreated: {
		type: [eventSchema],
		ref: "Events",
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
