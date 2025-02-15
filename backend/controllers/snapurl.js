const snapurl = require('../models/snapurl');

const updateLikeValue = async (req, res) => {
    try {
        const document = await snapurl.findOneAndUpdate(
            {},
            { $inc: { count: 1 } }, // Increment count by 1
            { new: true, upsert: true } // Ensure it creates the document if not already present
        );
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error updating like value:', error);
        res.status(500).json({ message: 'Server error. Could not  update like value.' });
    }
};

const getLikeValue = async (req, res) => {
    try {
        const document = await snapurl.findOne({});
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error getting like value:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { updateLikeValue, getLikeValue };

