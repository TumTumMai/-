const mongoose = require('mongoose');

const event = mongoose.Schema({
    DMY: String,
    Timestar: String,
    Timeend: String,
    Nameevent: String,
    Content: String,
    Address: String,
    image: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('event', event);