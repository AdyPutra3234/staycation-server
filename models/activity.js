const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const activity = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    isPopular: {
        type: Boolean,
    },
    itemId: {
        type: ObjectId,
        ref: 'item',
    },
});

module.exports = mongoose.model('activity', activity);