const mongoose= require('mongoose');

const souravBandyopadhyaySchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

const SouravBandyopadhyay = mongoose.model('SouravBandyopadhyay', souravBandyopadhyaySchema);
module.exports = SouravBandyopadhyay;