const mongoose = require('mongoose');

const trayRandallSchema = new mongoose.Schema({
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

export const TrayRandall = mongoose.model('TrayRandall', trayRandallSchema);
