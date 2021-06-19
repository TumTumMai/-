const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const brochure = mongoose.Schema({
    BrochureName: String,
    image: [],
    IdBooth: { type: Schema.Types.ObjectId, required: true },
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('brochure', brochure);