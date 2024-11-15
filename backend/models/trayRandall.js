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

 (async () => {
    try {
        const existingDocument = await TrayRandall.findOne();
        if (!existingDocument) {
            await TrayRandall.create({}); // Create the default object
            console.log("Default object created.");
        } else {
            console.log("Default object already TrayRandall.");
        }
    } catch (error) {
        console.error("Error ensuring default object existence:", error);
    }
})();

 module.exports = TrayRandall;