const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const minibooth = mongoose.Schema({
    MiniBoothName: String,
    Location: String,
    IDImage: { type: Schema.Types.ObjectId, required: true },
    image: String


}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});
minibooth.virtual("brochure", {
    ref: "brochure",
    localField: "_id",
    foreignField: "IdBooth"
})

minibooth.virtual("item", {
    ref: "item",
    localField: "_id",
    foreignField: "IdBooth"
})

module.exports = mongoose.model('minibooth', minibooth);

