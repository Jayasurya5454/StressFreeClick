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


(async () => {
    try {
        const existingDocument = await SouravBandyopadhyay.findOne();
        if (!existingDocument) {
            await SouravBandyopadhyay.create({}); // Create the default object
            console.log("Default object created.");
        } else {
            console.log("Default object already SouravBandyopadhyay.");
        }
    } catch (error) {
        console.error("Error ensuring default object existence:", error);
    }
})();

module.exports = SouravBandyopadhyay;