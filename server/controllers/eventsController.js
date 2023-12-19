const Events = require('../model/Events')

const getAllEvents = async (req, res) => {
    const events = await Events.find()
    if(!events) return res.status(204).json({message: 'No Events Listed.'})
    res.status(200).json(events)
}

const createEvent = async (req, res) => {
    const {eventName, eventHost} = req.body
    if(!eventName || !eventHost) return res.status(400).json({message: 'Event Name and Host are required.'})
    const duplicate = await Events.findOne({ eventName })
    if(duplicate) return res.sendStatus(409) //conflict
    try {
        const result = await Events.create({
            eventName,
            eventHost
        })
        res.status(201).json(result)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = { getAllEvents, createEvent }