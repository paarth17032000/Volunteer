const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    eventHost: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Events', eventSchema)


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