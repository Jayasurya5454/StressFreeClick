const mongoose= require('mongoose');

const simontheonlyoneSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});
 const Simontheonlyone = mongoose.model('Simontheonlyone', simontheonlyoneSchema);
 module.exports = Simontheonlyone;