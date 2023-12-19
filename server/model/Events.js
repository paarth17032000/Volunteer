const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	eventName: {
		type: String,
		required: true,
		min: [3, "Name is too short"],
	},
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
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
	},
	eventCategory: {
		type: String,
		required: true,
	},
	volunteerRequired: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	venue: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	upvotes: {
		type: [Number],
		required: true,
	},
});

module.exports = mongoose.model("Events", eventSchema);

// eventDate: {
//     type: String,
//     required: true
// },
// eventLocation: {
//     type: String,
//     required: true
// },
// requiredPeople: {
//     type: Number,
//     required: true
// }
