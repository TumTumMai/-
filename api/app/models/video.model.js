const mongoose = require('mongoose');

const video = mongoose.Schema({
    videoname: String,
    address: String,
    image: []

}, {
    timestamps: true
});

module.exports = mongoose.model('video', video);