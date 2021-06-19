const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const item = mongoose.Schema({
    ItemName: String,
    image: String,
    IdBooth: { type: Schema.Types.ObjectId, required: true },
    price: Number,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('item', item);