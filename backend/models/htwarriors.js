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



 (async () => {
    try {
        const existingDocument = await Htwarriors.findOne();
        if (!existingDocument) {
            await Htwarriors.create({}); // Create the default object
            console.log("Default object created.");
        } else {
            console.log("Default object already Htwarriors.");
        }
    } catch (error) {
        console.error("Error ensuring default object existence:", error);
    }
})();

 module.exports = Htwarriors;