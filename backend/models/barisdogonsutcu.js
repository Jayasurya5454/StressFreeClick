const mongoose = require('mongoose');

const barisdogonsutcuSchema = new mongoose.Schema({
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

export const Barisdogonsutcu = mongoose.model('Barisdogonsutcu', barisdogonsutcuSchema);