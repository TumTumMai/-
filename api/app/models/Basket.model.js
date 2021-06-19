const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const basket = mongoose.Schema({
    UserId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    ItemId: [{ type: Schema.Types.ObjectId, ref: 'item', required: true }]
}, {
    timestamps: true
});

module.exports = mongoose.model('basket', basket);