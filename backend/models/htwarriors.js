const mongoose = require('mongoose');

const htwarriorsSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

 const Htwarriors = mongoose.model('Htwarriors', htwarriorsSchema);
 module.exports = Htwarriors;