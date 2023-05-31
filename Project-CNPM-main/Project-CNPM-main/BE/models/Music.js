const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    singer: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        // enum: ["Vui", "Buồn"]
    }
})

musicSchema.index({song: 'text'});

const Musics = mongoose.model('musics', musicSchema);

Musics.createIndexes({song: 'text'});

module.exports = Musics;