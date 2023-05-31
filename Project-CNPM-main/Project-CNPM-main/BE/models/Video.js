const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
    }
})


const Videos = mongoose.model('videos', videoSchema);

module.exports = Videos;