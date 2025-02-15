const mongoose = require('mongoose');

const snapurlSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

 const snapurl = mongoose.model('snapurl', snapurlSchema);



 (async () => {
    try {
        const existingDocument = await snapurl.findOne();
        if (!existingDocument) {
            await snapurl.create({}); // Create the default object
            console.log("Default object created.");
        } else {
            console.log("Default object already snapurl.");
        }
    } catch (error) {
        console.error("Error ensuring default object existence:", error);
    }
})();

 module.exports = snapurl;











