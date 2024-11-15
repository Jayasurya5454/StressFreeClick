const mongoose = require('mongoose');

const barisdogonsutcuSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
    
});

const Barisdogonsutcu = mongoose.model('Barisdogonsutcu', barisdogonsutcuSchema);

module.exports = Barisdogonsutcu;