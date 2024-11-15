const mongoose= requie('mongoose');

const souravBandyopadhyaySchema = new mongoose.Schema({
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

export const SouravBandyopadhyay = mongoose.model('SouravBandyopadhyay', souravBandyopadhyaySchema);