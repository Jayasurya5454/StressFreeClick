const mongoose = require('mongoose');

const trayRandallSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

 const TrayRandall = mongoose.model('TrayRandall', trayRandallSchema);
 module.exports = TrayRandall;