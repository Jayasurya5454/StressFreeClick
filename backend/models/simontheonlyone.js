const mongoose= require('mongoose');

const simontheonlyoneSchema = new mongoose.Schema({
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});
export const Simontheonlyone = mongoose.model('Simontheonlyone', simontheonlyoneSchema);