const mongoose = require('mongoose');

// Define the schema
const barisdogonsutcuSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count: {
        type: Number,
        required: true,
        default: 0,
    },
});

// Create the model
const Barisdogonsutcu = mongoose.model('Barisdogonsutcu', barisdogonsutcuSchema);

// Ensure only one object exists in the collection
(async () => {
    try {
        const existingDocument = await Barisdogonsutcu.findOne();
        if (!existingDocument) {
            await Barisdogonsutcu.create({}); // Create the default object
            console.log("Default object created.");
        } else {
            console.log("Default object already Barisdogonsutcu.");
        }
    } catch (error) {
        console.error("Error ensuring default object existence:", error);
    }
})();

module.exports = Barisdogonsutcu;
