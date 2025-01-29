const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    count :
    {
        type: Number,
        required: true,
        default: 0
    }
});

 const portfolio = mongoose.model('portfolio', portfolioSchema);



 (async () => {
    try {
        const existingDocument = await portfolio.findOne();
        if (!existingDocument) {
            await portfolio.create({}); // Create the default object
            console.log("Default object created.");
        } else {
            console.log("Default object already portfolio.");
        }
    } catch (error) {
        console.error("Error ensuring default object existence:", error);
    }
})();

 module.exports = portfolio;