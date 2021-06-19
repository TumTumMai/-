const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const image = mongoose.Schema({
    BoothName: String,
    Location: String,
    Categories: { type: Schema.Types.ObjectId },
    image: String,
    Event_Start: Date,
    Event_End: Date,

}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

image.virtual("mini", {
    ref: "minibooth",
    localField: "_id",
    foreignField: "IDImage"
})

module.exports = mongoose.model('image', image);