const mongoose = require('mongoose');

const categories = mongoose.Schema({
    NameCategorise: String,
    image: String,

}, {
    timestamps: true,
    toJSON: {
        virtuals: true
    }
});

categories.virtual("Event", {
    ref: "image",
    localField: "_id",
    foreignField: "Categories"
})

module.exports = mongoose.model('categories', categories);
