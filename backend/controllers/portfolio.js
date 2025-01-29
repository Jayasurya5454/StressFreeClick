const portfolio  = require('../models/portfolio');

const updateLikeValue = async (req, res) => {
    try {
        const { action } = req.body;
        if (!['increment', 'decrement'].includes(action)) {
            return res.status(400).json({ message: 'Invalid action specified. Use "increment" or "decrement".' });
        }
        const incrementValue = action === 'increment' ? 1 : -1;
        const document = await portfolio.findOneAndUpdate(
            {},
            { $inc: { count: incrementValue } }, 
            { new: true, upsert: true } 
        );
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error updating like value:', error);
        res.status(500).json({ message: 'Server error. Could not update like value.' });
    }
};
const getLikeValue = async (req,res) => {
    try {
        const document = await portfolio.findOne({});
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error getting like value:', error);
        res.status(500).json({ message: 'Server error' });
    }  
};
module.exports = { updateLikeValue,getLikeValue}









