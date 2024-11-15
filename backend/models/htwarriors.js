const mongoose = require('mongoose');

const htwarriorsSchema = new mongoose.Schema({
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

export const Htwarriors = mongoose.model('Htwarriors', htwarriorsSchema);
