const mongoose = require("mongoose");
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
		max: 10,
	},
	eventsRegistered: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Events",
		required: true,
		max: 4,
	},
	eventsCreated: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "Events",
		required: true,
	},
});

module.exports = mongoose.model("User", userSchema);
