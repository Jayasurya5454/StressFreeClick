const portfolio  = require('../models/portfolio');

const updateLikeValue = async (req, res) => {
    try {
        // No action is needed here anymore, so we just update the like count to 1
        const document = await portfolio.findOneAndUpdate(
            {},
            { $set: { count: 1 } }, // Directly set the count to 1
            { new: true, upsert: true }
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

