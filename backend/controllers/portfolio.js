const portfolio = require('../models/portfolio');

const updateLikeValue = async (req, res) => {
    try {
        // Increment the like count by 1 each time the function is called
        const document = await portfolio.findOneAndUpdate(
            {},
            { $inc: { count: 1 } }, // Increment count by 1
            { new: true, upsert: true } // Ensure it creates the document if not already present
        );
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error updating like value:', error);
        res.status(500).json({ message: 'Server error. Could not update like value.' });
    }
};

const getLikeValue = async (req, res) => {
    try {
        const document = await portfolio.findOne({});
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error getting like value:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { updateLikeValue, getLikeValue };

