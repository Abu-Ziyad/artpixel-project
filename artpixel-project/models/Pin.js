const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pin', PinSchema);