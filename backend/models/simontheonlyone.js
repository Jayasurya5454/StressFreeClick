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



 (async () => {
    try {
        const existingDocument = await Simontheonlyone.findOne();
        if (!existingDocument) {
            await Simontheonlyone.create({}); // Create the default object
            console.log("Default object created.");
        } else {
            console.log("Default object already Simontheonlyone.");
        }
    } catch (error) {
        console.error("Error ensuring default object existence:", error);
    }
})();

 module.exports = Simontheonlyone;